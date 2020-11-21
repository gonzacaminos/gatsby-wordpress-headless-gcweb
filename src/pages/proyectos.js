import React from "react"
import { graphql } from "gatsby"
import Card from "../components/card"

export default function Home({ data }) {
  return (
      <div className="content">
        <h1>Proyectos</h1>
          <div className="columns">
            {data.allWordpressPost.edges.map(({ node }) => (
             <div className="column is-one-third">
              <Card title={node.title} author={node.author.name}/>
            </div>

          ))}
          </div>
          
      </div>      
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          author {
            name
          }
        }
      }
    }
  }
`