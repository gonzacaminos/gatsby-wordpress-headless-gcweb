import React from "react"
import Layout from '../components/layout'
import AutorCard from '../components/autor-card'
import ProyectShowcase from '../components/proyect-showcase'
import About from '../components/about'

const Autor = ({ data }) => {
  const autor = data.allWordpressWpUsers.edges[0].node
  const post = autor.authored_wordpress__POST[0]
  const image = (post.featured_media != null) ? post.featured_media.source_url : "https://bulma.io/images/placeholders/1280x960.png"

  return (
    <Layout seo_title={autor.name}>
    <AutorCard showButton={false} image={autor.avatar_urls.wordpress_96} name={autor.name} desc={autor.description} slug={autor.slug}/>

    <About title="Acerca del autor" content={autor.description} classes="has-text-centered" />
    <ProyectShowcase image={image} name={post.title} desc={post.excerpt} slug={post.slug} showButton={true}/>
    </Layout>
 
  )
  
}

export default Autor

export const query = graphql`
  query($slug: String!) {
    allWordpressWpUsers(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          id
          name
          description
          authored_wordpress__POST {
            slug
            title
            excerpt
            author {
              name
            }
            featured_media {
              source_url
            }
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
