import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import './footer.css'
export default function footer() {
  return (
    
    <MDBFooter className='text-center text-lg-start text-muted' id='footer'>
      <section className='footertab'>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='img_con col-md-2 col-lg-4 col-xl-3 mx-auto mb-4'>
              <img src='logo3.png' alt ="logo"/>
              <img src='logoinvert.jpg' alt='nitc'/>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a href='#about' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#events' className='text-reset'>
                  Events
                </a>
              </p>
              <p>
                <a href='#gallery' className='text-reset'>
                  Gallery
                </a>
              </p>
              <p>
                <a href='#people' className='text-reset'>
                  People
                </a>
              </p>
              <p>
                <a href='#people' className='text-reset'>
                  Faq's
                </a>
              </p>
              <p>
                <a href='#people' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Social Media </h6>
              <p>
                <a href='https://in.pinterest.com/' className='text-reset'>
                  Linked In
                </a>
              </p>
              <p>
                <a href='https://in.pinterest.com/' className='text-reset'>
                  Facebook
                </a>
              </p>
              <p>
                <a href='https://in.pinterest.com/' className='text-reset'>
                  Twitter
                </a>
              </p>
              <p>
                <a href='https://in.pinterest.com/' className='text-reset'>
                  Instagram
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> NIT
Calicut              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                iic-nitc@nitc.ac.in
              </p>
              <p>
                <i className='fas fa-phone me-3'></i>09645654204
              </p>
              <p>
              <i class="fas fa-location-dot"></i> &nbsp;&nbsp; P.O 673601
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='/'>
          IIC|NITC
        </a>
      </div>
    </MDBFooter>
  );
}