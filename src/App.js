import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Registration'
import { ItemContext } from './Components/context/ItemContext'
import { PrivateRoute } from './Utils/PrivateRoute'

export default function App() {
    return (
        <>
        <Router>
            <ItemContext.Provider >
        <Login />
        <Register />
        <PrivateRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/register" component={Register} />
        </ItemContext.Provider>
        </Router>
        </>

    );

};
