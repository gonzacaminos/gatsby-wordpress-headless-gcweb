import React from 'react'
import {Link} from 'gatsby'

const Header = (props) => {
    return (
        <header>
         
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
       
        
            <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <Link to="/proyectos"  className="navbar-item">Proyectos</Link>
                <Link to="/autores"  className="navbar-item">Autores</Link>
                <Link to="/seminario"  className="navbar-item">El seminario</Link>
            
            </div>
        
            <div className="navbar-end">
                <div className="navbar-item">
                <div className="buttons">
                    
                    <Link to="/contacto" className="button is-primary">Contacto</Link>

                </div>
                </div>
            </div>
            </div>
        </nav>
        </header>
       
    )
}

export default Header