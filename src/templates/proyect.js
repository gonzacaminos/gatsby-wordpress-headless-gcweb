import React from "react"
import Layout from '../components/layout'
import AutorCard from '../components/autor-card'
import About from '../components/about'
import ProyectShowcase from '../components/proyect-showcase'

const Proyect = ({ data }) => {
  const post = data.allWordpressPost.nodes[0]
  const image = (post.featured_media != null) ? post.featured_media.source_url : "https://bulma.io/images/placeholders/1280x960.png"

  return (
    <Layout seo_title={post.title}>

    <ProyectShowcase image={image} name={post.title} desc={post.excerpt} />

    <div className="mt-6">
    <About title="Acerca de este proyecto" content={post.content} />

    </div>

    <AutorCard showButton={true} image={post.author.avatar_urls.wordpress_96} name={post.author.name} desc={post.author.description} slug={post.author.slug}/>
  
   
    </Layout>
 
  )
  
}

export default Proyect

export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: {slug: {eq: $slug}}) {
    nodes {
      id
      title
      excerpt
      slug
      content
      date(formatString: "DD/MM/YYYY")
      author {
        name
        slug
        description
        avatar_urls {
          wordpress_96
        }
      }
      featured_media {
        source_url
      }
    }
  }
  }
`
