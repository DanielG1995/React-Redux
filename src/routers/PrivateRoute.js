import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({
    isAuth,
    component:Component,
    ...rest
}) => {
    console.log(isAuth)
  
    return (
        <Route 
        {...rest}
        component={(props)=>(isAuth)?
            (<Component {...props} />):
            (<Redirect to='/auth/login' />)}
        />
            
    )
}
