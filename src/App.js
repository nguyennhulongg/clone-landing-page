import React from 'react'
import LandingPage from './pages/landing-page'
import Layout from './layout'
import './App.css'

const App = () => {
  return (
    <div>
      <Layout>
        <LandingPage />
      </Layout>
    </div>
  )
}

export default App