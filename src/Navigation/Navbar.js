import React from 'react'
// import { Link } from 'react-router-dom' 

function Navbar() {
  
  return (

    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">

            <div className='nav-link'>
              Home 
            </div>

          </li>
          <li className="nav-item">
            
            <div className='nav-link'>
              Home 
            </div>

          </li>

        </ul>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar;