import React from 'react'
import { Link } from 'gatsby'

const ProyectShowcase = (props) => {
  let button = ""
  if(props.showButton === true) {
      button = 
      <div class="buttons">
        <Link to={"/proyectos/"+props.slug} className="button is-primary is-medium">Ver más</Link>
      </div>
  
  }
    return (
        <section className="section has-background-dark has-text-light">
       <div className="container">
       <div class="columns">
        <div class={"column is-flex is-align-items-center is-justify-content-center mr-6 "} >
          <figure className="imagemb-3">
            <img className="" src={props.image} alt="Proyect featured"/>
          </figure>
        </div>
        <div class="column">
          <p className="mb-5"><small>PROYECTO</small></p>
          <h1 className="is-size-1 mb-6">{props.name}</h1>
          <p className="mb-6" dangerouslySetInnerHTML={{__html:  props.desc}} />
          {button}
        </div>
       
      </div>
       </div>
     </section>
    )
}

export default ProyectShowcase