import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import ProyectsList from '../components/proyects-list'

const Home = () => {
  return (
    <Layout>
      <Hero title="Contenido hecho web" classes="is-primary is-medium" /> 
      <div className="container-fluid mt-6">
      <ProyectsList />

      </div>
    </Layout>
 
  )
  
}

export default Home
