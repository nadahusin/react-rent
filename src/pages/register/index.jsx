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
             <button type="button" className="btn btn-dark sign">Login</button>
                </div>
                <div className="right">
                <div className="form-auth">
                    <input type="name" className="form-control my-auth" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Name" />
                    <input type="email" className="form-control my-auth" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    <input type="password" className="form-control my-auth" id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Password" />
                </div>
                <button type="button" className="btn btn-warning btn-choose">Sign Up</button>
                <button type="button" className="btn btn-light btn-choose"> <FcGoogle/> Sign Up with Google</button>
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