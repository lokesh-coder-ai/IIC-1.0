import React from 'react';
import './Trail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Trail() {
  return (

    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div className="serviceBox">
            <div className="icon icon1" >

              <i className="fab fa-medapps"></i>
            </div>
            <div className="content">

              <h2>Vision</h2>
              <p>

                To be a Institute's Innovation Council, National Institute of Technology Calicut of international recognition
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm">

          <div className="serviceBox">
            <div className="icon" >

              <i className="	fas fa-chart-line	"></i>
            </div>
            <div className="content">

              <h2>Mission</h2>
              <p>

                To develop entrepreneurs and provide innovative ideas to lead and use technology for the progress of the mankind and to be strategically adaptive to the technological advancement.        </p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div className="serviceBox">
            <div className="icon"  >
              <i className="fas fa-tasks	"></i>

            </div>
            <div className="content">

              <h2>Objectives</h2>
              <p>


                To conduct various innovation and entrepreneurship related activities such as periodic workshops, seminars, interactions with entrepreneurs, professionals and create a mentor pool for student innovators        </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Trail;
