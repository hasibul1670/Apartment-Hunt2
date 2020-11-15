import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logos/Logo.png';


function Navbar() {
    return (
        <div>
               <nav class=" ml-5 mr-5 navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#"><img  style={{height:"54.8px",width:"100px"}}src={logo}alt="" srcset=""/> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
      <Link to="/home" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#About">About</a>
      </li>
    
      <li class="nav-right ">
          <Link to="/Service" class="nav-link active">Service</Link>
            </li>
            <li class="nav-right ">        
          <a class="nav-link active">Concerns</a>
            </li>
            <li class="nav-right ">
          <a class="nav-link active">Event</a>
            </li>
          
            <li class="nav-item active">              
        <Link  to="/contact" class="nav-link" href="#contact">Contact</Link>
      </li>
      <Link to="/login">
              <button  style={{height:"38px",background:"#275A53",width:"100px"}} type="button" class="btn btn-dark">Login</button>
              </Link>
      <li class="nav-item">
      
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
