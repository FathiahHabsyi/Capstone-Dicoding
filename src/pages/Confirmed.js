import React from 'react'
import Footer from '../components/Footer'
import HeaderApp from '../components/HeaderApp'
import check from '../assets/images/approved.png';

const Confirmed = () => {
  return (
    <>
    <HeaderApp/>
    <img src={check} alt="hero-banner" className="img-fluid mx-auto d-block mt-5"/>
    <div className='text-check text-center'>
      <h1>Success</h1>
      <h2>Thank you for applying, I hope your proposal will be approved</h2>
    </div>
    <Footer/>
    </>
  )
}

export default Confirmed