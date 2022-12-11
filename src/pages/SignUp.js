import React from 'react'
import Footer from '../components/Footer'
import iconGoogle from '../assets/images/icons/google.png'
import iconFacebook from '../assets/images/icons/facebook.png'

const SignUp = () => {
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg mx-auto nav-line">
      <div className="container">
        <a className="navbar-brand navbar-brand-name" href="/">Fetch<span className='brand-name-w'>W</span>ork</a>
      </div>
    </nav>
    <div className='container register__container'>
      <h2 className='text-center register__title'>Sign Up</h2>
      <form className='form-center'>
        <div className='container text-center'>
          <div class="mb-4 login-form">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" placeholder='Fetchwork Name'/>
          </div>
          <div class="mb-4 login-form">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder='********'/>
          </div>
          <div class="mb-4 login-form">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder='fetchwork@gmail.com'/>
          </div>
          <a href='/SignUp/register'><button className="btn btn-signup px-5 mt-4">Next</button></a>
          <p className='mt-4'>or</p>
          <div className="d-grid gap-2 col-3 mx-auto mb-3">
            <button className="btn btn-outline-primary" type="submit"><img src={iconGoogle} className="img-google me-3" width="20" alt='connect-google'/>Log in with Google</button>
            <button className="btn btn-outline-primary" type="submit"><img src={iconFacebook} className="img-google me-3" width="20" alt='connect-facebook'/>Log in with Facebook</button>
      </div>
        </div>
    </form>
    </div>
  </div>
  <Footer/>

    </>
  )
}

export default SignUp