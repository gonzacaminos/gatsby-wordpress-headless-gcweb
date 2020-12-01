import React from "react"
import Layout from '../components/layout'
import {Link} from 'gatsby'
import Hero from "../components/hero"

const Autores = ({ data }) => {
  return (
    <Layout seo_title="Autores">
      <Hero classes="is-medium is-dark mb-4" title="Autores" subtitle="Autores de trabajos del seminario."/>
      <div className="container mt-6">
        <div className="columns is-multiline">
        {data.allWordpressWpUsers.edges.map((author) => {
          const _author = author.node
          return (
          <div className="column is-one-third mb-3 has-text-centered">
              <Link to={"/autores/"+ _author.slug}>
                <div className="box autor-box px-4">
                  <figure className="image is-96x96 has-text-centered mb-3">
                    <img className="is-rounded" src={_author.avatar_urls.wordpress_96} alt="Perfil de autor" />
                  </figure>
                  <small> {_author.name}</small>
                </div>
              </Link>
              
          </div>
          )
        })}
        </div>
        
      </div>

       
    </Layout>
 
  )
  
}

export default Autores


export const query = graphql`
  {
    allWordpressWpUsers {
      edges {
        node {
          id
          name
          authored_wordpress__POST {
            slug
          }
          slug
          avatar_urls {
            wordpress_96
          }
        }
      }
    }
  }
`


