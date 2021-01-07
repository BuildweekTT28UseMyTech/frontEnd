import React, { useState, useEffect, useContext } from 'react'
import * as yup from 'yup'
//import style from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { login } from '../actions'
import { useHistory, Link } from 'react-router-dom'
import { ItemContext } from './context/ItemContext'

const Schema = yup.object().shape ({
    username: yup
        .string()
        .required('Username is required for login'),
    password: yup
        .string()
        .required('Password is required')
        .min(4, 'Must be at least 4 characters long')  
}) 

function Login(props) {
    const { push } = useHistory();
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        Schema.isValid(user).then(valid => {
            setButtonDisabled(!valid)
        })
    }, [user])

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('https://rheact-usemytech.herokuapp.com/login', `grant_type=password&username=${user.username}&password=${user.password}`, {
    headers: {
        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    })
    .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        push("/home");
        setUser({
        username: '',
        password: ''});
        console.log(response.data)

    })
    .catch((error) => {
        alert(`Oops.. Looks like there was an error. \n"${error}"`);
    });
    }

    const validateChange = e => {
        yup
            .reach(Schema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ''
                })
            })
            .catch(err => {
                setErrors({
                    [e.target.name]: err.errors[0]
                })
            })
    }

    const inputChange = e => {
        e.persist()

        const newUserData = {
            ...user,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }

        validateChange(e)
        setUser(newUserData)
    }

    return (

        <form className='login-form' onSubmit={handleSubmit}>
            <h1 className='text-center'>
                <span className='font-weight-bold'>Use My Tech Stuff</span>
            </h1> 

            <h2 className='text-center'>Login</h2>

            <div className='form-group'>
                <label for='username'>Username:</label>
                <input
                    name='username'
                    type='username'
                    class='form-control'
                    value={user.username}
                    onChange={inputChange}
                    placeholder='Enter your username' 
                />
            </div>

            <div className='form-group'>
                <label for='password'>Password:</label>
                <input
                    name='password'
                    type='password'
                    class='form-control'
                    value={user.password}
                    onChange={inputChange}
                    placeholder='Enter your Password' 
                />
            </div>

            <button disabled={buttonDisabled} className='btn btn-primary btn-lg btn-block mt-3 mb-3 ' > Login </button>

            <div className='text-center pt3'>Need an account?</div>

            <Link className='btn btn-primary btn-lg btn-block mt-3 mb-3 ' to="/register">Register</Link>

        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default Login;

