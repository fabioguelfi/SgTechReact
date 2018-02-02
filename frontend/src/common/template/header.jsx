import React from 'react'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>SG</b>Rentals</span>
            <span className='logo-lg'>
                <i className='fa fa-barcode'></i>
                <b> SG</b>  Rentals
            </span>
        </a>    
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)