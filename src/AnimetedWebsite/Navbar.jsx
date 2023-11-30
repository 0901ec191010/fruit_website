import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
   {/* <div classNameName='conatainer-fluid nav_bg'>
    <div classNameName='row'> 
    <div classNameName='col-10 mx-auto'>
    <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameName="container-fluid">
    <Link classNameName="navbar-brand" to="/">Technical</Link>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span> <i className="bi bi-card-list"></i>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav ms-auto mb-2 mb-lg-0" id='hsac'>
        <li classNameName="nav-item">
          <Link exact activeclassNameName='menu_active' classNameName="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li classNameName="nav-item">
          <Link activeclassNameName='menu_active' classNameName="nav-link" to="/service">Services</Link>
        </li>

        <li classNameName="nav-item">
          <Link activeclassNameName='menu_active' classNameName="nav-link" to="/about">About</Link>
        </li>

        <li classNameName="nav-item">
          <Link activeclassNameName='menu_active' classNameName="nav-link" to="/contact">Contact</Link>
        </li>
        
      
      </ul>
    
    </div>
  </div>
</nav>
      </div>
      </div>
      </div> */}


      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='nav'>
  <div className="container-fluid">
    <Link className="navbar-brand ms-5" to="/">Technical</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='ms-auto' id='navbaritem'>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      


      
       
      </ul>
    </div>
  </div>
  </div>
</nav>


</> 

)
}

export default Navbar
