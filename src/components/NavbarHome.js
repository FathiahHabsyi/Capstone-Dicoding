import React from 'react'
import Modal from './Modal'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg py-3 fs-5">
        <div className="container">
        <a className="navbar-brand navbar-brand-name" href="/">Fetch<span className='brand-name-w'>W</span>ork</a>
          <button className="navbar-toggler" type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-2">
                <a className="nav-link" href="/jobs">Find Job</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#/hire">Hire Freelances</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#/about">About</a>
              </li>
            </ul>
            <div className="">
              <button className="btn btn-success me-2 px-3"
              data-bs-toggle={Modal}
              data-bs-target="#login">Log in</button>
              <button className="btn btn-outline-success me-2 px-3">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar