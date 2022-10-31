import './style.css'
import React from 'react';

function Header() {
  return (
    <div className="header">
    <img src="https://res.cloudinary.com/nadahusin/image/upload/v1667153919/myapp/logoimg_rnxyye.png" alt="logo.png"></img>

            <div className="navigate">
                <div className="btnlink">
                    <a class="nav-link" href="!#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="!#">Vehicle Type <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="!#">History <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="!#">About <span class="sr-only">(current)</span></a>
                </div>


                <div className="btnauth">
                <button type="button" class="btn btn-outline-warning my-btn">Login</button>
                <button type="button" class="btn btn-warning my-btn">Register</button>
                </div>

            </div>
        </div>
  )
}

export default Header