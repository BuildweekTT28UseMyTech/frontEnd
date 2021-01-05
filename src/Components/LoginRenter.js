import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
//import style from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/login.css'
import Axios from 'axios'
import { login } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Schema = yup.object().shape ({
    email: yup
        .string()
        .required('Email is required for login'),
    password: yup
        .string()
        .required('Password is required')
        .min(4, 'Must be at least 4 characters long')  
})

function Login(props) {

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [renter, setRenter] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        Schema.isValid(renter).then(valid => {
            setButtonDisabled(!valid)
        })
    }, [renter])

    const handleSubmit = e => {
        e.preventDefault()
        // console.log('click')
        // Axios.post('NEED LINK', renter)
        //     .then((res) => {
        //         console.log(res.data)
        //         props.login(res.data)
        //         props.history.push('/home')
        //     })
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
            ...renter,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }

        validateChange(e)
        setRenter(newUserData)
    }

    return (

        <form className='login-form' onSubmit={handleSubmit}>
            <h1 className='text-center'>
                <span className='font-weight-bold'>Use My Tech Stuff</span>
            </h1>

            <h2 className='text-center'>Login</h2>

            <div className='form-group'>
                <label for='email'>Email:</label>
                <input
                    name='email'
                    type='email'
                    class='form-control'
                    value={renter.email}
                    onChange={inputChange}
                    placeholder='Enter your Email address' 
                />
            </div>

            <div className='form-group'>
                <label for='password'>Password:</label>
                <input
                    name='password'
                    type='password'
                    class='form-control'
                    value={renter.password}
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

export default connect(mapStateToProps, { login })(Login)

