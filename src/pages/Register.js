import React from 'react'
import Footer from '../components/Footer'

const Register = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg mx-auto nav-line">
      <div className="container">
        <a className="navbar-brand navbar-brand-name" href="/">Fetch<span className='brand-name-w'>W</span>ork</a>
      </div>
    </nav>
    <div className='container register__container'>
      <h2 className='text-center register__title'>Personal Data</h2>
      <form className='form-center'>
      <div class="mb-3">
        <label for="skill" class="form-label">Skill</label>
        <input type="email" class="form-control" id="skill" placeholder='Programming | UI/UX Design | Data Analyst'/>
      </div>
      <div class="mb-3">
        <label for="experience" class="form-label">Experience</label>
        <input type="text" class="form-control" id="experience" placeholder='Programming | UI/UX Design | Data Analyst'/>
      </div>
      <div class="mb-3">
        <label for="howLongWork" class="form-label">How long do you work</label>
        <input type="text" class="form-control" id="howLongWork" placeholder='1 - 2 Years'/>
      </div>
      <div class="mb-3">
        <label for="lastEducation" class="form-label">Last Education</label>
        <input type="text" class="form-control" id="lastEducation" placeholder='Senior high school'/>
      </div>
      <div class="mb-3">
        <label for="biodata" class="form-label">Biodata</label>
        <textarea type="text" class="form-control" id="biodata" placeholder='I am a passionate professional with four years experience in the writing industry who is trying to further develop myself in many areas'/>
      </div>
      <div class="mb-3">
        <label for="region" class="form-label">Region</label>
        <input type="text" class="form-control" id="region" placeholder='Indonesia'/>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" id="address" placeholder='Jl. Asedrta 111'/>
      </div>
      <div class="mb-3">
        <label for="noPhone" class="form-label">Number Phone</label>
        <input type="text" class="form-control" id="noPhone" placeholder='+ 82 123 4567'/>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Image</label>
        <input class="form-control" type="file" id="formFile"/>
      </div>
      <button type="submit" class="btn btn-submit-register">Submit</button>
    </form>
    </div>
    <Footer/>
  </div>
  )
}

export default Register