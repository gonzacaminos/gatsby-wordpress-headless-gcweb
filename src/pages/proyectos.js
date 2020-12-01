import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Layout from "../components/layout"
import ProyectsList from '../components/proyects-list'

export default function Home({ data }) {
  return (
    <Layout seo_title="Proyectos">
        <Hero classes="is-medium is-primary" title="Proyectos" subtitle="Trabajos realisados en marco del seminario."/>
        <div className="container mt-5">
         <ProyectsList />
        </div>
    </Layout>    
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