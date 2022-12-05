import React from 'react'
import Category from './components/Category'
import Footer from './components/Footer'
import Guides from './components/Guides'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import Services from './components/Services'


const App = () => {
  return (
    <>
      <Navbar/>
      <Category/>
      <Jumbotron/>
      <Services/>
      <Guides/>
      <Footer/>
    </>
  )
}
export default App