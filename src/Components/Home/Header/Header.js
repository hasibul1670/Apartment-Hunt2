import React from 'react'
import './Header.css'
function Header() {
    return (
        <div class= " d-flex flex-column align-items-center justify-content-center header-main">

            <div className="title"> 
                   <h1 > FIND YOUR HOUSE RENT </h1> 
                </div> 
        
     <div >
<br/>
    <form class="form-inline my-5 my-lg-0">
      <input class="input form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button  style={{height:"38px",background:"#275A53",width:"100px"}} class="btn btn-outline-success my-2 my-sm-0" type="submit">Find Now </button>
    </form>
  </div>

        </div>
    )
}

export default Header
