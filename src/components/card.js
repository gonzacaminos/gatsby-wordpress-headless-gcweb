import React from 'react'
import {Link} from 'gatsby'

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={props.image} alt="Placeholder" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                   
                    <div className="media-content">
                        <p className="title is-4">{props.title}</p>
                        <p className="subtitle is-6">{props.author}</p>
                    </div>
                    </div>

                    <div className="content">
                   
                    <div dangerouslySetInnerHTML={{__html:  props.excerpt}} />
                    <br/>
                    <small><time datetime={props.date}>{props.date}</time></small>
                    </div>
                </div>
                </div>
        </div>
        
    )
}

export default Card