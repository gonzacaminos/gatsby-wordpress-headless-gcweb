import React from 'react'
import Header from './header'
import Footer from './footer'
import SEO from '../components/seo'
import '../styles/bulma.min.css'
import layoutStyles from './layout.module.scss' 


const Layout = (props) => {
    return (
        <div className={layoutStyles.layout}>
            <SEO title={props.seo_title} />
            <div>
                <Header/>
                <div className="container-fluid">
                    {props.children} 
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Layout