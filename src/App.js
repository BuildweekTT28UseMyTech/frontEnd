import React, { useState } from 'react'
import './App.css'
import { Route, Link, useHistory } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers'

import Register from './Components/Registration'

export default App;
