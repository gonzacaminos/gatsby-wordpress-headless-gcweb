import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Card from "../components/card"

const ProyectsList = () => {
    const data = useStaticQuery(graphql`
        {
        allWordpressPost {
            nodes {
                id
                title
                excerpt
                slug
                date(formatString: "DD/MM/YYYY")
                author {
                    name
                  }
                featured_media {
                source_url
                }
            }
            }
        }
    `)
    return (

          <div className="columns mt-4">
            {data.allWordpressPost.nodes.map((post) => {
                const image = post.featured_media.source_url ? post.featured_media.source_url : ""
                return (
                <div className="column is-one-third">
                    <Card title={post.title} author={post.author.name} excerpt={post.excerpt} date={post.date} image={image}/>
                </div>
                )
            })}           
          </div>
          

    )
}

export default ProyectsList
