import React from 'react'
import './style.css'


function Login() {
  return (
    <div className="containers">
        <div className="auth">
            <div className="txt-auth">
                <h1> Let's Explore The World </h1>
                     <h3> Don't have account?</h3>

             <button type="button" class="btn btn-dark sign">Sign Up</button>
        
                <div className="form-auth">
                    <input type="email" class="form-control my-auth" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    <input type="password" class="form-control my-auth" id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Password" />
                </div>
                <h3>forgot password?</h3>
                <button type="button" class="btn btn-warning btn-choose">Login</button>
                <button type="button" class="btn btn-light">Sign with Google</button>


            </div>
        </div>

        <div className="footer">
            <p>footer</p>
        </div>
    </div>
  )
}

export default Login