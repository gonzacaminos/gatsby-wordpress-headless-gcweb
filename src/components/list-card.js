import React from 'react'
import { Link } from "gatsby"
import Card from "../components/card"

const ListCard = (props) => {
    return (
        <div className="container mb-6">
          <h4 className="is-size-4">{props.title}</h4>

          <div className="columns is-multiline mt-4">
            {props.list.map((post) => {
                const image = (post.featured_media != null) ? post.featured_media.source_url : "https://bulma.io/images/placeholders/1280x960.png"
                return (
                <div className="column is-one-third">
                    <Link to={"/proyectos/"+ post.slug}>
                        <Card title={post.title} author={post.author.name} excerpt={post.excerpt} date={post.date} image={image}/>
                    </Link>

                </div>
                )
            })}           
        </div>
        </div>
        
    )    
}

export default ListCard