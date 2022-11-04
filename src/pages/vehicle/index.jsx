import './style.scoped.css'
import React from 'react';
import Cards from '../../components/card'



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

const cars = [
  {
      "name" : "Van",
      "location" : "Yogyakarta",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667153931/myapp/merapi-yogya_kzvnr1.png"
  },
  {
      "name" : "Lamborghini",
      "location" : "South Jakarta",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667542053/myapp/marcus-p-oUBjd22gF6w-unsplash_1_q1amaf.png"
  },
  {
      "name" : "Jeep",
      "location" : "Malang",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667153927/myapp/bromo-malang_bh18z8.png"
  },
  {
      "name" : "White Jeep",
      "location" : "Kalimantan",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667542066/myapp/dave-goudreau-8ZfrYgVcU6A-unsplash_1_me3qqs.png"
  }
  
]

const motorbike = [
  {
      "name" : "Vespa",
      "location" : "Yogyakarta",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667542958/myapp/lawrence-chismorie--tRWfFcwEp4-unsplash_6_ycyb7r.png"
  },
  {
      "name" : "Honda KLX",
      "location" : "Kalimantan",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667153932/myapp/telukbogam-kalimantan_yzd2yq.png"
  },
  {
      "name" : "Honda",
      "location" : "Malang",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667542958/myapp/volkan-olmez-SvMlXH_eW6o-unsplash_3_1_uavbvh.png"
  },
  {
      "name" : "Matic Bike",
      "location" : "Yogyakarta",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667542958/myapp/chuttersnap-AcdxiyTSR0A-unsplash_1_2_kvizvh.png"
  }
  
]

const bike = [
  {
      "name" : "Fixie",
      "location" : "Yogyakarta",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667543132/myapp/alonso-talbert-s6DiDMLK0jk-unsplash_1_x0cr5p.png"
  },
  {
      "name" : "Sport Bike",
      "location" : "Kalimantan",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667543131/myapp/pascal-obermeier-YOphb-Xr2sk-unsplash_1_qotcdw.png"
  },
  {
      "name" : "Onthel",
      "location" : "Malang",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667543215/myapp/michail-sapiton-V-9PQsTpX9c-unsplash_1_q3gnx1.png"
  },
  {
      "name" : "Fixie Gray",
      "location" : "Yogyakarta",
      "image" : "https://res.cloudinary.com/nadahusin/image/upload/v1667543132/myapp/robert-bye-tG36rvCeqng-unsplash_1_otqiqu.png"
  }
  
]


function Vehicle() {
  return (
    <div className="containers">
    <div className="header">
    <img src="https://res.cloudinary.com/nadahusin/image/upload/v1667153919/myapp/logoimg_rnxyye.png" alt="logo.png"></img>

            <div className="navigate">
                <div className="btnlink">
                    <a className="nav-link" href="!#">Home <span class="sr-only">(current)</span></a>
                    <a className="nav-link" href="!#">Vehicle Type <span class="sr-only">(current)</span></a>
                    <a className="nav-link" href="!#">History <span class="sr-only">(current)</span></a>
                    <a className="nav-link" href="!#">About <span class="sr-only">(current)</span></a>
                </div>


                <div className="btnauth">
                <img src="https://res.cloudinary.com/nadahusin/image/upload/v1667486426/myapp/email_1_jttdhz.png" alt="email.png"></img>
                <img src="https://res.cloudinary.com/nadahusin/image/upload/v1667486426/myapp/image_39_msrjno.png" alt="email.png"></img>

                </div>

            </div>
            
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

            <div className="cars">
            <div className="txt-popular">
                <h1> Cars</h1>
            </div> 
            <div className="img-loc">
                {
                    cars.map((v, k) => {
                        return <Cards key={k} img={v.image} name={v.name} location={v.location} />
                    }
                    )
                }
            </div>
        </div>

        <div className="motorbike">
            <div className="txt-popular">
                <h1>Motorbike</h1>
            </div> 
            <div className="img-loc">
                {
                    motorbike.map((v, k) => {
                        return <Cards key={k} img={v.image} name={v.name} location={v.location} />
                    }
                    )
                }
            </div>
        </div>
        
        <div className="bike">
            <div className="txt-popular">
                <h1>Bike</h1>
            </div> 
            <div className="img-loc">
                {
                    bike.map((v, k) => {
                        return <Cards key={k} img={v.image} name={v.name} location={v.location} />
                    }
                    )
                }
            </div>
        </div>

        </div>

  )
}

export default Vehicle