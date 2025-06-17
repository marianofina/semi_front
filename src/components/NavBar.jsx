import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '10px 20px',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            gap: '20px'
        }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/bloq-portal" style={{ color: 'white', textDecoration: 'none' }}>Portales</Link>
            <Link to="/preferencias" style={{ color: 'white', textDecoration: 'none' }}>Preferencias</Link>
            <Link to="/config" style={{ color: 'white', textDecoration: 'none' }}>Config</Link>
        </nav>
    )
}

export default Navbar
