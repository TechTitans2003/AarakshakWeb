import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        Bootstrap
                    </a>
                </div>
            </nav>
            <div className="form-container">
                <div className="body-container">
                    <h2>Login</h2>

                    <form action="">

                        <div className="form-group">
                            <input type="email" required />
                            <label htmlFor="">Email</label>
                            <i className="fa-solid fa-envelope"></i>
                        </div>

                        <div className="form-group">
                            <input type="password" required />
                            <label htmlFor="">Password</label>
                            <i className="fa-solid fa-lock"></i>
                        </div>

                        <p className='for-rem'>
                            <span><input type="checkbox" />Remember Me</span> 
                        <a href='/'>Forget Password</a>
                        </p>

                        <input id="btn" type="submit" value="Login" />

                        <p>Don't have a account? <Link to='/signUp'>Register</Link></p>

                    </form>
                </div>
            </div>
        </>
    )
}
