import React from 'react';
import NavbarHome from '../components/NavbarHome';
import Category from '../components/Category';
import hero from '../assets/images/hero.png';
import Footer from '../components/Footer';
import {FiLogIn} from 'react-icons/fi'
import {RiUserSearchLine} from 'react-icons/ri'
import {BsCalendarCheck} from 'react-icons/bs'
import {IoPersonAddOutline} from 'react-icons/io5'
import {BsPeople} from 'react-icons/bs'

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
              <p className="lead mb-4 fw-bold" style={{"color": "#37474F"}}>Find great talent build your business <br/>Take your career to the next level.</p>
            </div>
            <img src={hero} alt="hero-banner" className="img-fluid d-none d-lg-block w-50"/>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="p-5 my-5">
        <div className="container text-center">
          <h1 className="mb-5 fw-bold" style={{"color": "#00BF2D"}}>Why Choose Fetchwork</h1>
          <div className="row gap-4">
            <div className="col-md">
              <div className="card border-0 text-light" style={{"background": "#7FB77E"}}>
                <div className="card-body">
                  <div className="h1 m-4">
                    <IoPersonAddOutline/>
                    <hr/>
                    <h2 className="fw-bold">Rekrut Freelancer</h2>
                    <p className="lead">Cari freelancer terbaik untuk menjadi partner ataupun support dalam menbantu pekerjaanmu</p>
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
                    <h2 className="fw-bold">Uang Saku</h2>
                    <p className="lead">Salah satu platform kerja sampingan yang dapat menambah pengalaman serta uang sakumu.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card border-0 text-light" style={{"background": "#7FB77E"}}>
                <div className="card-body">
                  <div className="h1 m-4">
                    <BsPeople/>
                    <hr/>
                    <h2 className="fw-bold">Terbuka</h2>
                    <p className="lead">Fetch work terbuka bagi siapapun yang ingin berkerja sebagai freelancer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* GUIDES */}
      <section className="p-5 my-5">
        <div className="container text-center">
          <h1 className="mb-5 fw-bold" style={{"color": "#00BF2D"}}>Fetch Guides</h1>
          <div className="row gap-4">
            <div className="col-md">
              <div className="card border-0 text-light" style={{"background": "#7FB77E"}}>
                <div className="card-body">
                  <div className="h1 m-4">
                    <FiLogIn/>
                    <hr/>
                    <p className="lead">Sign up/Log in apabila sudah memiliki akun</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card border-0 text-light" style={{"background": "#7FB77E"}}>
                <div className="card-body">
                  <div className="h1 m-4">
                    <RiUserSearchLine/>
                    <hr/>
                    <p className="lead">Temukan partner yang membutuhkan jasamu</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card border-0 text-light" style={{"background": "#7FB77E"}}>
                <div className="card-body">
                  <div className="h1 m-4">
                    <BsCalendarCheck/>
                    <hr/>
                    <p className="lead">Diskusikan hingga kesepakatan kedua belah pihak terbuat</p>
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