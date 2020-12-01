import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import ListCard from "../components/list-card"

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
        <ListCard list={data.allWordpressPost.nodes} title="Proyectos recientes"/>

    )
}

export default ProyectsList
