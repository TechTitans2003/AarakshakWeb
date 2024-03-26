import React from 'react';
import { Outlet } from 'react-router-dom';

import authBg from '../../img/assets/camAuth.png';

export default function Login(props) {

    return (
        <>
            {/* <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={props.logo} alt="Logo" width="20" height="24" className="d-inline-block align-text-top logo-align" />
                        <span style={{ marginLeft: `34px` }}>{props.title}</span>
                    </a>
                </div>
            </nav> */}


            <div className="nav-shape center">
                <img src={props.logo} alt="" />
                <h2>{props.title}</h2>
            </div>

            <div className="l-form">
                <div className="shape1"></div>
                <div className="shape2"></div>

                <div className="form">
                    {/* <img src="assets/img/authentication.svg" alt="" className="form__img"> */}
                    <img src={authBg} alt="" className="form__img" />

                    <form action="" className="form__content">
                        <Outlet />
                    </form>


                </div>

            </div>

        </>
    )
}
