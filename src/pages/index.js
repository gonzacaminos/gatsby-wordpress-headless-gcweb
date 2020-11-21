import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import ProyectsList from '../components/proyects-list'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="container">
      <h4 className="is-size-4">Proyectos recientes</h4>
      <ProyectsList />

      </div>
    </Layout>
 
  )
  
}

export default Home
