import React from 'react'
import {Link} from 'gatsby'
import About from '../components/about'
import footerStyles from './footer.module.scss'

const Footer = () => {
    const testimonial = '"Gracias al seminario de Gestión de contenidos para Web pude iniciarme en el mundo web y crecer profesionalmente"'
    return (
        <section className="bottom">
            <div className={"test m-0 has-background-primary " + footerStyles.about}>
            <About title={testimonial} content="María B." classes="has-text-centered" />
            </div>
            <div className="p-6 my-6">
                <div className="columns">
                    <div className="column is-half">
                        <h5 className="is-size-3 has-text-right">¿Querés ser parte del seminario?</h5>
                    </div>
                    <div className="column is-half has-text-centered">
                    <Link to="/contacto" className="button is-primary is-large">Contactanos</Link>

                    </div>

                </div>
            </div>    
            <footer className="footer">
               
            <div className="content has-text-centered">
                <p>
                <strong>Seminario Gestión de Contenidos web</strong> por <a href="https://gonza.io">Gonzalo Bonini</a>. 2020.
                </p>
            </div>
            </footer>
        </section>
        
    )
}

export default Footer 