import React from 'react'
import Header from './header'
import Footer from './footer'

import '../styles/bulma.min.css'
import layoutStyles from './layout.module.scss' 


const Layout = (props) => {
    return (
        <div>
            <div>
                <Header/>
                <div className="container">
                    {props.children} 
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Layout