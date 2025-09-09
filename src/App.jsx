import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <Products />
      </main>
      <Footer />
    </div>
  )
}
