// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css'

const Header = () => {
    
    return (
        <div className="header">
            <h1>Call a Friend</h1>
            <h6>your friendly contact app</h6>
            <div className="garis"></div>
        </div>
    )
}

export default Header;