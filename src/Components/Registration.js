import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/login.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email('Must be a valid email'),
    password: yup
        .string()
        .min(4, 'Must be at least 4 characters long'),
    username: yup
        .string()
        .min(3, 'Must be at least 3 characters long'),
    type: yup
        .string()
        .required('Please specify if you are an Owner or Renter')

})

const Register = (props) => {

    const [user, setUser] = useState({
        email: '',
        password: '',
        username: '',
        type: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        username: '',
        type: ''
    })

    useEffect(() => {
        formSchema.isValid(user)
            .then(valid => {
                setButtonDisabled(!valid)
            })
    }, [user])

    const validate = event => {

        let value = event.target.value;

        yup
            .reach(formSchema, event.target.name)
            .validate(value)
            .then(valid => {
                setErrors({
                    ...errors, [event.target.name]: ''
                })
            })
            .catch(error => {
                setErrors({
                    ...errors, [event.target.name]: error.errors[0]
                })
            })
    }

    const inputChange = event => {

        event.persist();

        validate(event);

        let value = event.target.value

        setUser({
            ...user, [event.target.name]: value
        })
    }

    const formSubmit = event => {

        event.preventDefault()

        // Axios.post('NEED LINK', user)
        //     .then((res)=>{
        //         props.history.push('/login')
        //     })
        //     .catch((res) => {
        //         console.log(res)
        //     })
    }

    const [buttonDisabled, setButtonDisabled] = useState(true)

    return (

        <form 
            className='login-form' 
            onSubmit={formSubmit}>

            <h1 className='text-center'>
                <span className='font-weight-bold'>Use My Tech Stuff</span>
            </h1>

            <h2 className='text-center'> Registration </h2>

            <div className='form-group' > 
                <label htmlFor='emailId'>Email:</label>
                    <input
                        name='email'
                        type='email'
                        id='emailId'
                        class='form-control'
                        placeholder='Create an email'
                        value={user.email}
                        onChange={inputChange}
                    />
                    { errors.email.length > 0 ? ( <p className='error' > { errors.email } </p> ) : null  }
            </div>

            <div className='form-group'>
                <label htmlFor='passwordId'>Password:</label>
                    <input
                        type='password'
                        name='password'
                        id='passwordId'
                        class='form-control'
                        placeholder='Create an password'
                        value={user.password}
                        onChange={inputChange}
                    />

                    {errors.password.length > 0 ? (<p className='error' > { errors.password} </p>) : null}    
            </div>

            <div className='form-group'>
                <label htmlFor='usernameId'> Username: </label>
                    <input
                        type='text'
                        name='username'
                        id='usernameId'
                        class='form-control'
                        placeholder='Create an username'
                        value={user.username}
                        onChange={inputChange}
                    />

                    {errors.username.length > 0 ? (<p className='error' > { errors.username} </p>) : null}    
            </div>

            <ul>
                <li>
                    <label>
                            <input
                                type='radio'
                                value='owner'
                                checked={user.type === 'owner'}
                                onChange={inputChange}
                            />
                            Owner
                    </label>
                </li>

                <li>
                    <label>
                            <input
                                type='radio'
                                value='renter'
                                checked={user.type === 'renter'}
                                onChange={inputChange}
                            />
                            Renter
                    </label>
                </li>
            </ul>

            <button disabled = {buttonDisabled} className='btn btn-primary btn-lg btn-block mt-3 mb-3' > Confirm Registration </button>

            <div className='text-center pt3'>Have an account?</div>
            
            <Link className='btn btn-primary btn-lg btn-block mt-3 mb-3 ' to="/login">Login</Link>
        </form>
    )
}

export default Register