import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./expert.css";

function expert() {
  return (
    <div className="peopletrail">
      <span>
        <i className="bg fa-solid fa-people-group"></i>
        <p className="team">Expert Representatives of IIC 4.0</p>
      </span>

      <div class="wrapper">
        <div class="membre">
          <img src="/staff/suhail.jpg" alt="" />

          <div class="info">
            <h5 class="name">Mr.Suhail V.P</h5>
          </div>

          <div class="overly left">
            <div class="middle">
              {/* <h5 class="name">Mr.Suhail V.P</h5> */}
              <p class="job"> Alumni Entrepreneur</p>
              <p class="text">
                Areas Of Interest:Electronic System Design, Control Systems,
                Electronic Circuits ,Electronic Packaging, EMI/EMC
              </p>

              <div class="social-icones">
                <a href="#" class="icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="mailto:#" class="icon">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="membre">
          <img src="/staff/nil.png" alt="" />

          <div class="info">
            <h6 class="name">Dr.Lawwellman</h6>
          </div>

          <div class="overly left">
            <div class="middle">
              {/* <h5 class="name">Dr.Lawwellman</h5> */}
              <p class="job">Patent Expert</p>
              <p class="text"></p>

              <div class="social-icones">
                <a href="#" class="icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="mailto:#" class="icon">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/lawwellman-p-672265217/?originalSubdomain=in"
                  class="icon"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="membre">
          <div class="img">
            <img src="/staff/nil.png" alt="" class="img" />
          </div>
          <div class="info">
            <h5 class="name">Mr.Deepak Balachandran</h5>
          </div>
          <div class="overly left">
            <div class="middle">
              {/* <h5 class="name">Mr.Deepak Balachandran</h5> */}
              <p class="job">Member,Expert from near by industry</p>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nobis perspiciatis molestiae tempora quasi. Nulla.
              </p>

              <div class="social-icones">
                <a href="#" class="icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="mailto:#" class="icon">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="membre">
          <img src="/staff/nil.png" alt="" />

          <div class="info">
            <h5 class="name">Mr.Vinay James Kynadi</h5> 
          </div>

          <div class="overly left">
            <div class="middle">
              {/* <h5 class="name">Mr.Vinay James Kynadi</h5> */}
              <p class="job"> Angel Investor</p>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nobis perspiciatis molestiae tempora quasi. Nulla.
              </p>

              <div class="social-icones">
                <a href="#" class="icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default expert;
