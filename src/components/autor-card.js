import React from 'react'
import {Link} from 'gatsby'
import autorCard from './autor-card.module.scss'

const AutorCard = (props) => {
    const styles = {  
        backgroundImage: "url(" + props.image + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }

    let button = ""
    if(props.showButton === true) {
        button = 
        <div class="buttons">
            <Link to={"/autores/"+props.slug} className="button is-primary">Ver más</Link>
          </div>
    
    }
    return (
        <section className="section has-background-dark has-text-light">
       <div className="container">
       <div class="columns">
        <div class={"column is-flex is-align-items-center is-justify-content-center mr-6 " + autorCard.image} style={styles}>
          <figure className="image is-96x96 mb-3">
            <img className="is-rounded" src={props.image} alt="Imagen de perfil de autor"/>
          </figure>
        </div>
        <div class="column">
          <p className="mb-3"><small>AUTOR</small></p>
          <h4 className="is-size-4 mb-6">{props.name}</h4>
          <p className="mb-6">{props.desc}</p>
          
          {button}
        </div>
       
      </div>
       </div>
     </section>
    )
}

export default AutorCard