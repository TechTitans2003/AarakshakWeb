import React from 'react';

export default function Navbar() {

    const path = window.location.pathname;

    if (path === '/' || path === '/login' || path === '/signUp') {
        return null;
    }
    return (
        <>
            <header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
                <button
                    className='navbar-toggler d-md-none collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#sidebarMenu'
                    aria-controls='sidebarMenu'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <span className='navbar-brand'>
                    <strong>
                        <span className='logo-full'></span>
                    </strong>
                </span>
                <div className='navbar-nav'>
                    <div className='text-nowrap'>
                        {/* <button className='px-3 mx-2 my-2' onClick={handleLogout}> */}
                        <button className='px-3 mx-2 my-2 btn-primary btn' >
                            Sign out
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
