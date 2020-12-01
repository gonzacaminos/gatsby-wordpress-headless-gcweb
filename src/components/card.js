import React from 'react'
import cardStyles from './card.module.scss'

const Card = (props) => {
    const styles = {  
        backgroundImage: "url(" + props.image + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    return (
        <div>
            <div className={"card " + cardStyles.card}>
                <div className={"card-image " + cardStyles.card_image} style={styles}>
                   
                </div>
                <div className="card-content">
                    <div className="media">
                   
                    <div className="media-content">
                        <p className="title is-4">{props.title}</p>
                    </div>
                    </div>

                    <div className="content">
                   
                    <div dangerouslySetInnerHTML={{__html:  props.excerpt}} />
                    <br/>
                    <small>Por <strong>{props.author}</strong>. <time datetime={props.date}>{props.date}</time></small>
                    </div>
                </div>
                </div>
        </div>
        
    )
}

export default Card