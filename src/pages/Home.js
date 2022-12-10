import React from 'react';
import NavbarHome from '../components/NavbarHome';
import Category from '../components/Category';
import hero from '../assets/images/hero.png';
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <>
    <NavbarHome/>
    <Category/>
    {/* HERO BANNER */}
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
            <img src={hero} alt="hero-banner" className="img-fluid d-none d-lg-block w-50"/>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="p-5 mb-5">
        <div className="container text-center">
          <h1 className="mb-5 fw-bold" style={{"color": "#00BF2D"}}>Why Choose Fetchwork</h1>
          <div className="row gap-4">
            <div className="col-md">
              <div className="card border-0 text-light" style={{"background": "#7FB77E"}}>
                <div className="card-body">
                  <div className="h1 m-4">
                    <i className="bi bi-currency-dollar"></i>
                    <hr/>
                    <h2 className="fw-bold">Lorem </h2>
                    <p className="lead">ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ratione pariatur! Corporis necessitatibus ipsum harum sequi voluptate, voluptatum nemo reiciendis.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card border-0 text-light" style={{"background": "#7FB77E"}}>
                <div className="card-body">
                  <div className="h1 m-4">
                    <i className="bi bi-currency-dollar"></i>
                    <hr/>
                    <h2 className="fw-bold">Lorem </h2>
                    <p className="lead">ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ratione pariatur! Corporis necessitatibus ipsum harum sequi voluptate, voluptatum nemo reiciendis.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card border-0 text-light" style={{"background": "#7FB77E"}}>
                <div className="card-body">
                  <div className="h1 m-4">
                    <i className="bi bi-currency-dollar"></i>
                    <hr/>
                    <h2 className="fw-bold">Lorem </h2>
                    <p className="lead">ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ratione pariatur! Corporis necessitatibus ipsum harum sequi voluptate, voluptatum nemo reiciendis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* GUIDES */}
      <section className="p-5 mb-5">
        <div className="container text-center">
          <h1 className="mb-5 fw-bold" style={{"color": "#00BF2D"}}>Fetch Guides</h1>
          <div className="row gap-4">
            <div className="col-md">
              <div className="card border-0 text-light" style={{"background": "#7FB77E"}}>
                <div className="card-body">
                  <div className="h1 m-4">
                    <i className="bi bi-person-add"></i>
                    <hr/>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ratione pariatur! Corporis necessitatibus ipsum harum sequi voluptate, voluptatum nemo reiciendis.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card border-0 text-light" style={{"background": "#7FB77E"}}>
                <div className="card-body">
                  <div className="h1 m-4">
                    <i className="bi bi-currency-dollar"></i>
                    <hr/>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ratione pariatur! Corporis necessitatibus ipsum harum sequi voluptate, voluptatum nemo reiciendis.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card border-0 text-light" style={{"background": "#7FB77E"}}>
                <div className="card-body">
                  <div className="h1 m-4">
                    <i className="bi bi-currency-dollar"></i>
                    <hr/>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ratione pariatur! Corporis necessitatibus ipsum harum sequi voluptate, voluptatum nemo reiciendis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer/>
    </>
  )
}