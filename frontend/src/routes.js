import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />

                <Route path='/home' component={Home} />

                <Route path='/register' component={Register} />
            </Switch>
        </Router>
    )
 }