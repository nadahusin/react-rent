import './style.scoped.css';
import React from 'react';
import Header from '../../components/header'
import line from '../../assets/img/garis.png'
import Cards from '../../components/card'
import Footer from '../../components/footer'


const popular = [
    {
        "name" : "Merapi",
        "location" : "Yogyakarta",
        "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667153931/myapp/merapi-yogya_kzvnr1.png"
    },
    {
        "name" : "Teluk Bogam",
        "location" : "Kalimantan",
        "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667153932/myapp/telukbogam-kalimantan_yzd2yq.png"
    },
    {
        "name" : "Bromo",
        "location" : "Malang",
        "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667153927/myapp/bromo-malang_bh18z8.png"
    },
    {
        "name" : "Malioboro",
        "location" : "Yogyakarta",
        "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667153926/myapp/malioboro-yogya_i7q4ps.png"
    }
    
]

function Home() {
  return (
    <div className="containers">
        <Header />
        <div className="hero">
            <div className="txt-hero">
                <h1>Explore and Travel</h1>
            </div>
            <h3> Vehicle Finder</h3>
            <img src={line} alt="line.png" />

            <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle btn-lg choose" href="!#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Location
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="!#">Yogyakarta</a>
                <a className="dropdown-item" href="!#">Kalimantan</a>
                <a className="dropdown-item" href="!#">Malang</a>
                <a className="dropdown-item" href="!#">Jakarta</a>
            </div>

            <a className="btn btn-secondary dropdown-toggle btn-lg choose" href="!#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Type
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="!#">Cars</a>
                <a className="dropdown-item" href="!#">Motorbike</a>
                <a className="classNamedropdown-item" href="!#">Bike</a>
            </div>
            </div>

            <div className="dropdown2">
            <a className="btn btn-secondary dropdown-toggle btn-lg choose" href="!#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Payment
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="!#">With Prepayment</a>
                <a className="dropdown-item" href="!#">No Prepayment</a>
            </div>

            <a className="btn btn-secondary dropdown-toggle btn-lg choose" href="!#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Date
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="!#">Januari</a>
                <a className="dropdown-item" href="!#">Februari</a>
                <a className="dropdown-item" href="!#">Maret</a>
                <a className="dropdown-item" href="!#">April</a>
            </div>
            </div>
            <button type="button" className="btn btn-warning btn-choose">Explore</button>
        </div>

        <div className="popular">
            <div className="txt-popular">
                <h1> Popular in town</h1>
            </div>
            <div className="img-loc">
                {
                    popular.map((v, k) => {
                        return <Cards key={k} img={v.image} name={v.name} location={v.location} />
                    }
                    )
                }
            </div>
        </div>
    
            
        <div className="testimonials">
            <h1> Testimonials</h1>
            <div className="star">
                <img src="https://res.cloudinary.com/nadahusin/image/upload/v1667164304/myapp/star_occhma.png" alt="star.png"></img>
            </div>

            <div className="text-image">
                <div className="txt-testimoni">
                <p>”It was the right decision to rent vehicle here,
                    I spent less money and enjoy the trip.
                    It was an amazing experience to have a ride for wildlife trip!”</p>   
                    <h3> Edward Newgate</h3>
                  <h5> Founder Circle</h5>             
                </div>
                <img src="https://res.cloudinary.com/nadahusin/image/upload/v1667153929/myapp/edward_x1dhnd.png" className="rounded float-right" alt="..."></img>

            </div>                
         </div>

        <div className="footer">
            <Footer />
            
        </div>
    </div>
  )
}

export default Home