import React, { useContext, useState } from 'react';

import firebase from 'firebase';
import "firebase/auth";
import firebaseConfig from './firebaseconfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Logo.png';
import google from '../../logos/google.png';
import fb from '../../logos/fb.png';
import "./Login.css"
import Navbar from '../Shared/Navbar/Navbar';


function Login() {
    const[user,setUser]=   useState ({


        email:'',
        password:'',
        error:'',
        success:false
      })
    var provider = new firebase.auth.GoogleAuthProvider();
var fbprovider = new firebase.auth.FacebookAuthProvider();

const history =useHistory();
const location=useLocation();
const { from } = location.state || { from: { pathname: "/booking" } };

if(firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig);
  }
////////////// google auth start///////////////

const googlesignin=()=>{
 
   
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var {displayName,email} = result.user;
      const signuser ={name:displayName,email}
    //   setloguser(signuser)
      history.replace(from);
    })
    
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }


/////////////google auth end//////////////////////

/////////////fb auth start//////////////////////
const fblogin=()=>{
    firebase.auth().signInWithPopup(fbprovider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      var {displayName,email} = result.user;
      const signuser ={name:displayName,email}
    //   setloguser(signuser)
      history.replace(from);
 
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  }
/////////////fb auth end//////////////////////
let history1 = useHistory();
function login() {
    history.push("/login");
  }
////////////////////email auth start////////////////

const handleChange=(e)=>{

    let isFormValid ;
  
          if(e.target.name==='email'){
             isFormValid = /\S+@\S+\.\S/.test(e.target.value)
          }
          if(e.target.name==='password'){
            isFormValid =e.target.value.length > 6;
          }
          if (isFormValid){
          const newuser ={...user};
  newuser[e.target.name]=e.target.value;
//   setuser(newuser);
          }
        }
        const haldlesubmit =(e)=>{
  console.log(user.email ,user.password)
  if( user.email && user.password){
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    .then(res =>{
      const newuser ={...user}
            
            //   setuser(newuser);
            //   setloguser(newuser);
              history.replace(from);
            
              
    })
    
    .catch(function(error) {
      const newuser ={...user}
      newuser.error=error.message;
    //   setuser(newuser);
      var errorCode = error.code;
      var errorMessage = error.message;
      
    });
  
  }
  
  
  e.preventDefault();
        }
  
////////////////////email auth end////////////////////////
    return (
    <div>
            <Navbar></Navbar>
   
            <form className="form1"  onSubmit={haldlesubmit}>

{/* <h5 style={{color:'red' }}>{user.error}</h5> */}
    <h3>Login</h3>
  <div class="form-group">
    <input type="email" onBlur={handleChange} class="form-control"name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UserName Or Email" required/>
  </div>
  <div class="form-group">
    <input type="password" onBlur={handleChange} class="form-control" name="password" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <p></p>
 <input type="submit" class= " btn-primary login" value="Login" />
<p>
</p>
<small class="text">Don't have an account ?  <a  href="/createaccount" role="button">Create an account</a> </small>
<p></p>
<div className="or">
<h6> Or </h6>
</div>

<br/>
<button  onClick={fblogin}  type="button" class="b1 btn btn-outline-secondary"> <img src={fb} alt=""/> Continue With Facebook</button><br/>
<p></p>
<button  onClick={googlesignin} type="button" class="b1 btn btn-outline-secondary"> <img src={google} alt=""/> Continue With Google</button>

</form>
    </div>
    )
}

export default Login
