import React from 'react'
import HeaderApp from '../components/HeaderApp'
import Footer from '../components/Footer'
import { IoLocationOutline } from 'react-icons/io5'

const RequestList = () => {
  return (
    <>
    <HeaderApp/>
    <div className="card card-jobs mx-auto my-4">
      <div className="card-header card-header-text" style={{color: "white"}}>What you're looking for</div>
      <div className="card-body">
        <h5 className="card-text text-price">Hourly : Set the price</h5>
        <p className="card-text text-description">Input content you want</p>
        <div className="card-category">
          <ul className='list-unstyled'>
            <li>tags</li>
            <li>tags</li>
            <li>tags</li>
            <li>+</li>
          </ul>
        </div>
        <div className='card-location'>
          <IoLocationOutline style={{fontSize: "1.5rem"}}/> Choose location ...
        </div>
        <hr className='hr-card-jobs'/>
        <div className='container'>
          <h3 className='text-center text-card-jobs'>TELL ME WHAT YOU NEED</h3>
        </div>
        <hr className='hr-card-jobs'/>
        <div className='text-center'>
          <button type="button" class="btn btn-save">Save</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default RequestList