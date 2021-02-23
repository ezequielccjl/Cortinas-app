import React from 'react'
import '../CSS/navbar.css'

export const Navbar = () => {
    return(
        <div className="navbar">
            <div>
                CORTINAS . YA
            </div>
            <div className="nav-menu" >
                <ul className="nav-ul">
                    <li>Catálogo</li>
                    <li>Quiénes Somos</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </div>
    )
}