import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Logo.png';
import google from '../../logos/google.png';
import fb from '../../logos/fb.png';
import "./CreateAccount.css"
import Navbar from '../Shared/Navbar/Navbar';
function CreateAccount() {
    const handleSubmit=()=>{
        
    }
    return (
        <div>
<Navbar></Navbar>
    
        <div className='form1'>
            <h3>Create a Account</h3>
            <p></p>
        <form onSubmit={handleSubmit} >
          <div class="form-group">
            {/* <h5 style={{color:'red' }}>{user.error}</h5>
            {user.success && <h5 style={{color:'green' }}>User Created Successfully</h5> }
         */}
        
            <input type="Text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" required/>
          </div>
          <div class="form-group">
            <input type="Text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" required/>
          </div>
          <div class="form-group">
            <input type="Email"  name="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required/>
          </div>
          <div class="form-group">
            <input type="password"   name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
          </div>
          <div class="form-group">
            <input type="password"  name="cpassword" class="form-control" id="exampleInputPassword1" placeholder=" Confrim Password" required/>
          </div>
          <p></p>
       
         <input type="submit" class= " btn-primary login" value="Create an account" />
        <p>
        </p>
        <p class="text">Already have an account ?  <a  href="/login" role="button">Login</a> </p>
        <p></p>
        <div className="or">
<h6> Or </h6>
</div>
        <br/>
        <button  type="button" class="b1 btn btn-outline-secondary"> <img src={fb} alt=""/> Continue With Facebook</button><br/>
        <p></p>
        <button   type="button" class="b1 btn btn-outline-secondary"> <img src={google} alt=""/> Continue With Google</button>
        
        </form>
        </div>
        </div>
    )
}

export default CreateAccount
