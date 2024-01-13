import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp(props) {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={props.logo} alt="Logo" width="20" height="24" className="d-inline-block align-text-top logo-align" />
                        <span style={{ marginLeft: `34px` }}>{props.title}</span>
                    </a>
                </div>
            </nav>
            <div className="form-container">
                <div class="body-container">
                    <h2 style={{ padding: 0 }}>Sign Up</h2>

                    <form action="">

                        <div class="form-group">
                            <input type="text" required />
                            <label htmlFor="">Username</label>
                            <i class="fa-solid fa-user"></i>
                        </div>

                        <div class="form-group">
                            <input type="email" required />
                            <label htmlFor="">Email</label>
                            <i class="fa-solid fa-envelope"></i>
                        </div>

                        <div class="form-group">
                            <input type="password" required />
                            <label htmlFor="">Password</label>
                            <i class="fa-solid fa-lock"></i>
                        </div>
                        \
                        <input id="btn" type="submit" value="Sign Up" />

                        <p>Already Have a Account <Link to='/'>Login</Link></p>

                    </form>
                </div>
            </div>
        </>
    )
}
