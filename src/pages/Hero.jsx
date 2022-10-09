import React from "react";
import 'bootstrap'
import '../index.css'
import landscapeNakia from '../assets/landscapeNakia2.jpg'

const Hero = () => {
return(
        <div 
        className='p-5 text-center bg-image jumbotron-image'
        style={{ backgroundImage:`url(${landscapeNakia})`, height: 500 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', height: 400 }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 id="test" className='mb-3'>Nakia McNeil</h1>
              <h4 className='mb-3'>Aspiring Graphic Designer</h4>
              <a className='btn btn-outline-light btn-lg' href='/designthemes' role='button'>
                See My Designs
              </a>
            </div>
          </div>
        </div>
      </div>
)
}

export default Hero;