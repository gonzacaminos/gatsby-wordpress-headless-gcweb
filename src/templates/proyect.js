import React from "react"
import Layout from '../components/layout'

const Proyect = ({ data }) => {
  const post = data.allWordpressPost.nodes[0]
  return (
    <Layout>
      <h1 className="is-size-1">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
`
