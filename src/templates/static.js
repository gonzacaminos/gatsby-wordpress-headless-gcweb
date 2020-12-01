import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'

const Proyect = ({ data }) => {
  const page = data.allWordpressPage.nodes[0]

  return (
    <Layout seo_title={page.title}>
        <Hero classes="is-medium is-primary" title={page.title} subtitle=""/>
        <div className="container is-max-desktop py-6">
         <div className="content" dangerouslySetInnerHTML={{__html:  page.content}} />
        </div>
    </Layout>
 
  )
  
}

export default Proyect

export const query = graphql`
  query($slug: String!) {
    allWordpressPage(filter: {slug: {eq: $slug}}) {
    nodes {
      id
      title
      slug
      content
    }
  }
  }
`
