import React from 'react'
import './SignIn.css'

const LoginForm = () => {
  return(
  <div className="page-container">
    <div className="cover">
      <h1 style={{fontSize: '25px'}}>SIGN IN</h1>
      <input type="text" placeholder='Email'/>
      <input type="password" placeholder='Password'/>

      <button className="login-btn" style={{color: "white"}}>
        LOGIN
      </button>

      


      <p className="text">OR LOGIN USING</p>
      <div className="alt-login">
        <div className="facebook"></div>
        <div className="instagram"></div>

      </div>
    </div>
    </div> 
    
  )
}

export default LoginForm;