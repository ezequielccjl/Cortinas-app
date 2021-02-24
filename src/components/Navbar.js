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
                    <li>
                        <a className="nav-link">Catálogo</a>
                    </li>
                    <li>
                        <a className="nav-link">Quiénes Somos</a>
                    </li>
                    <li>
                        <a className="nav-link">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}