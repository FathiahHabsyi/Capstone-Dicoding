import React from 'react'

const Guides = () => {
  return (
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
  )
}

export default Guides