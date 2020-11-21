import React from 'react'
import {Link} from 'gatsby'
import headerStyles from './header.module.scss'

const Header = (props) => {
    return (
        <header className="mb-5">
         
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
            </a>
        
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
        
            <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <Link to="/"  className="navbar-item">Inicio</Link>
                <Link to="/proyectos"  className="navbar-item">Proyectos</Link>
                <Link to="/autores"  className="navbar-item">Autores</Link>
                <Link to="/seminario"  className="navbar-item">El seminario</Link>
                <Link to="/contacto" className="navbar-item">Contacto</Link>
            
        
                <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                    More
                </a>
        
                <div className="navbar-dropdown">
                    <a className="navbar-item">
                    About
                    </a>
                    <a className="navbar-item">
                    Jobs
                    </a>
                    <a className="navbar-item">
                    Contact
                    </a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item">
                    Report an issue
                    </a>
                </div>
                </div>
            </div>
        
            <div className="navbar-end">
                <div className="navbar-item">
                <div className="buttons">
                    <a className="button is-primary">
                    <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">
                    Log in
                    </a>
                </div>
                </div>
            </div>
            </div>
        </nav>
        </header>
       
    )
}

export default Header