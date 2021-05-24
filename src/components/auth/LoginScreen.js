import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleLogin, startLogin } from '../../actions/auth'

export const LoginScreen = () => {

    const [formValues, handleInputChange] = useForm({
        email: 'danny95ldu@gmail.com',
        password: 'downfall25'
    });

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.ui);

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(password, email));
    }

    const handleLoginWithGoogle = (e) => {
        dispatch(startGoogleLogin());
    }

    return (
        <div>
            <h3 className="auth__title"> Login </h3>
        
            <form onSubmit={handleLogin}>
                <input className="auth__input" type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange} />
                <input className="auth__input" type="text"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange} />

                <button
                    disabled={loading}
                    className="tn-primary btn-block mb-5 mt-5 pointer"
                    type="submit"
                >{(loading) ? 'Cargando...' : 'Login'}</button>
            </form>


            <div
                className="google-btn mb-5"
                onClick={handleLoginWithGoogle}
            >
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
            </div>
            <Link className="link" to="/auth/register" >
                Crear Cuenta
            </Link>
        </div>
    )
}
