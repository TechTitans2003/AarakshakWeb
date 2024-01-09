import React from 'react';
import Sidemenu from '../Sidemenu/Sidemenu';
import { Outlet } from 'react-router-dom';

export default function PanelLayout() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Sidemenu />
                    <Outlet />
                </div>
            </div>
        </>
    )
}