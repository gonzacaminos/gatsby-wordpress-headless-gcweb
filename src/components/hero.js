import React from 'react'
import heroStyles from './hero.module.scss'

const Hero = (props) => {
    let styles = { float: "none" } 
    let classes = ""
    if(props.image){
        classes = " " + heroStyles.hasImage
        styles = {  
            backgroundImage: "url(" + props.image + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }
    }
    return (
        <section className={"hero " + props.classes + classes} style={styles}>

        <div className="hero-body has-text-centered has-text-white mb-6">
            <div className="container">
            <h1 className="title">
                {props.title}
            </h1>
            <h2 className="subtitle" dangerouslySetInnerHTML={{__html:  props.subtitle}} />
            </div>
        </div>
        </section>
    )
}

export default Hero