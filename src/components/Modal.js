import React from 'react'
import iconGoogle from '../assets/images/icons/google.png'
import iconFacebook from '../assets/images/icons/facebook.png'

const Modal = () => {
  return (
    <div className="modal fade" id="login" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fw-bold">Login</h3>
              <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <form action="">
                <div className="mb-3">
                  <label for="username" className="col-form-label text-left">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="upwork@gmail.com"/>
                </div>
                <div className="mb-3">
                  <label for="password" className="col-form-label">Password</label>
                  <input type="text" className="form-control" id="password" placeholder="********"/>
                </div>
                <button className="btn btn-success px-5">Login</button>
              </form>
              <p className="lead m-4">or</p>
              <div className="d-grid gap-2 col-6 mx-auto mb-3">
                <button className="btn btn-outline-primary" type="submit"><img src={iconGoogle} className="img-google me-3" width="20" alt='connect-google'/>Log in with Google</button>
                <button className="btn btn-outline-primary" type="submit"><img src={iconFacebook} className="img-google me-3" width="20" alt='connect-facebook'/>Log in with Facebook</button>
              </div>
              <p>don't have an account yet? <a href="#/" style={{"text-decoration": "none"}}><span className="fw-bold" style={{"color":"#00BF2C"}}>Sign Up</span></a></p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal