import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { registerAcc } from '../../actions/auth'
import { removeError, setError } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    name: 'Daniel',
    email: 'danny95ldu@gmail.com',
    password: 123456,
    password2: 123456
  })

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isValidForm()) {
      dispatch(registerAcc(email, password, name));
    }

  }

  const isValidForm = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Error Nombre'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Error Email'));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError('Error password'));
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <div>
      <h3 className="auth__title"> Registrar </h3>
      {
        msgError && (
          <div className="auth__alert-error">
            {
              msgError
            }
          </div>
        )
      }
      <form onSubmit={handleRegister}>
        <input className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          autoComplete="off" />
        <input className="auth__input"
          type="text"
          placeholder="Nombre"
          name="name"
          value={name}
          onChange={handleInputChange}
          autoComplete="off" />
        <input className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
          autoComplete="off" />
        <input className="auth__input"
          type="password"
          placeholder="Confirmar Password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
          autoComplete="off" />

        <button
          className="btn btn-primary btn-block mb-5 mt-5"
          type="submit"
        >Registrar</button>
      </form>



      <Link className="link" to="/auth/login" >
        Regresar Login
            </Link>
    </div>
  )
}
