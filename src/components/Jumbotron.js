import React from 'react'
import heroBanner from '../assets/images/icons/hero-banner.svg';

const Jumbotron = () => {
  return (
    <section className="hero text-light mt-5 p-5 p-lg-0 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 className="mb-4" style={{"font-size" : "64px"}}>Looking For Side Money Here</h1>
              <p className="lead mb-4 fw-bold" style={{"color": "#37474F"}}>Find great talent build your business <br/>Take your caree to the next level.</p>
              <div>
                <button className="btn btn-lg text-light px-4 me-2" style={{"background-color": "#00BF2C"}}>
                  Find Job
                </button>
                <button className="btn btn-outline-light btn-lg px-4 ms-2">
                  Find Job
                </button>
              </div>
            </div>
            <img src={heroBanner} alt="hero-banner" className="img-fluid d-none d-lg-block w-50"/>
          </div>
        </div>
      </section>
  )
}

export default Jumbotron