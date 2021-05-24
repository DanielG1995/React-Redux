import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { firebase } from '../firebase/firebase'
import { login } from '../actions/auth'
import { PublicRoute } from './PublicRoutes'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [cheking, setCheking] = useState(true);
    const [logging, setLogging] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setLogging(true);
                
                
            } else {
                setLogging(false);
            }
            
            setCheking(false);

        });


    }, [dispatch, setCheking]);

    if (cheking) {
        return (<h1>Cargando...</h1>)
    }
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute isAuth={logging}  path="/auth" component={AuthRouter} />
                    <PrivateRoute isAuth={logging} exact path="/" component={JournalScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
