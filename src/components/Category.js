import React from 'react'
import programIcon from '../assets/images/icons/programming-icon.svg'
import dataIcon from '../assets/images/icons/data-icon.svg'
import designIcon from '../assets/images/icons/image-icon.svg'

const Category = () => {
  return (
    <section className="category-banner p-2">
        <div className="container"> 
          <div className="d-flex align-items-center justify-content-evenly fw-bold" style={{"color" : "#00BF2C"}}>
            <a href="#/" className="navbar-brand">
              <img src={programIcon} alt="programming-icon"/>
              Programming
            </a>
            <a href="#/" className="navbar-brand">
              <img src={designIcon} alt="design-icon"/>
              UI/UX Design
            </a>
            <a href="#/" className="navbar-brand">
              <img src={dataIcon} alt="data-analyst-icon"/>
              Data Analyst
            </a>
          </div>
        </div>
      </section>
  )
}

export default Category