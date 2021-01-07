import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Registration'

export default function App() {
    return (
        <>
        <Router>
        <Login />
        <Register />
        </Router>
        </>

    );

};
