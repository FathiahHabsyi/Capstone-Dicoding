import React from 'react'
import {MdNotificationsNone} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'

const HeaderApp = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fs-5 nav-line">
        <div className="container">
          <a className="navbar-brand navbar-brand-name" href="/">Fetch<span className='brand-name-w'>W</span>ork</a>
           <MdNotificationsNone className='mx-auto nav-icons'/>
          <CgProfile className='nav-icons'/>
        </div>
      </nav>
    </div>
  )
}

export default HeaderApp;