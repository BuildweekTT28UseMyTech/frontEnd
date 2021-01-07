import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Registration'
import { ItemContext } from './Components/context/ItemContext'
import { PrivateRoute } from './Utils/PrivateRoute'
import OwnerForm from './Components/CreatePostForm'
import PostList from './Components/PostList'
export default function App() {
    return (
        <>
        <Router>
            {/* <ItemContext.Provider value> */}
        <Login />
        <Register />
        <PrivateRoute exact path="/home" component={PostList} />
        <PrivateRoute exact path="/add" component={OwnerForm} />
        {/* </ItemContext.Provider> */}
        </Router>
        </>

    );

};
