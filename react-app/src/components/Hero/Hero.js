import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import me from '../Hero/me.jpg'

function Hero({refProps}) {
    return (
        <header style={{ paddingLeft: 0 }} ref = {refProps}>
          <div
            className='p-5 text-center bg-image no-repeat'
            style={{ backgroundImage: "url('https://wallpaperaccess.com/full/96462.jpg')", height:"100vh", width: 'auto'}}
          >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100' style={{ minHeight: '500px' }}>
                <div className='text-white'>
                  <h1 className='mb-3'>David Jolley</h1>
                  <h4 className='mb-3'>Web Developer</h4>
                  <a className='btn btn-outline-light btn-lg' href='about' role='button'>
                    Check out my Projects!
                  </a>
                </div>
                <div style={{ width: '30%', height: '30%', paddingLeft: '10%'}}>
                <img src={me} style={{ width: '100%', height: '100%', borderRadius: '5px' }} />
                </div>
              </div>
            </div>
          </div>
        </header>
      );
  }

export default Hero;