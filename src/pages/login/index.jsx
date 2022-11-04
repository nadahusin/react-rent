import React from 'react'
import './style.scoped.css'
import Footer from '../../components/footer'
import { FcGoogle } from 'react-icons/fc'




function Login() {
  return (
    <div className="containers">
        <div className="auth">
            <div className="line">

            </div>
            <div className="txt-auth">
                <div className="left">
                <h1> Let's Explore The World </h1>
                <h3> Don't have account?</h3>
             <button type="button" className="btn btn-dark sign">Sign Up</button>
                </div>
                <div className="right">
                <div className="form-auth">
                    <input type="email" className="form-control my-auth" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    <input type="password" className="form-control my-auth" id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Password" />
                </div>
                <h3>forgot password?</h3>
                <button type="button" className="btn btn-warning btn-choose">Login</button>
                <button type="button" className="btn btn-light btn-choose"> <FcGoogle/> Sign with Google</button>
                </div>               
                       
            </div>
        </div>

        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default Login