import React from 'react'

const About = (props) => {
    return (
        <section className="section about">
            <div className="container is-max-desktop">
            <h4 className="title has-text-centered">{props.title}</h4>
            <div className={"content " + props.classes} dangerouslySetInnerHTML={{__html:  props.content}} />
            </div>
        </section>
    )
}

export default About