import React from 'react'
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    return (
        
        <body>
        <div class="container">
          <div class="forms-container">
            <div class="signin-signup">
              <form action="#" class="sign-in-form">
                <h2 class="title">Sign in</h2>
                <div class="input-field">
                  <i class="fa fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div class="input-field">
                  <i class="fa fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
           <input type="submit" value="Login" class="btn solid" />
                <p class="social-text">Or Sign in with social platforms</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <i class="fa fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fa fa-google"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fa fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
           
            </div>
          </div>
    
          <div class="panels-container">
            <div class="panel left-panel">
              <div class="content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                  ex ratione. Aliquid!
                </p>
            <Link to="/register">   <button class="btn transparent" id="sign-up-btn">
                  Sign up
                </button>
                </Link> 
              </div>
              <img src="log.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
              <div class="content">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  laboriosam ad deleniti.
                </p>
                <button class="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              
            </div>
          </div>
        </div>
    
    
      </body>
    )
}

export default Login
