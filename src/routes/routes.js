import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../components/login/Login'
import Home from '../components/home/Home'

export default (
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/home' component={Home}></Route>
            </Switch>
        )