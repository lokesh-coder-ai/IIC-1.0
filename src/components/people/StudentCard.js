import React from 'react';
import './StudentCard.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import MailIcon from '@mui/icons-material/Mail';

function StudentCard() {
  return (
    <div id="studentcard">
      <span>
        <i className="bg fa-solid fa-people-group"></i>
        <p className="team">Student Representatives  of IIC 4.0</p>
      </span>

      <section class="profiles">
        <a>
          <img src="students/Santo.png" alt="" />
          <div className='name'>
            <h3>Santo Jacob</h3>
            <a href="https://www.linkedin.com/in/santo-jacob-koshy-242852190/" > <LinkedInIcon /> </a>
            <a href="mailto:santo_b190227me@nitc.ac.in"><MailIcon /></a>

          </div>
        </a>

        <a ><img src="students/Ben Thomas.jpg" alt="" />

          <div className='name'>
            <h3>Ben Thomas</h3>

            <a href="https://www.linkedin.com/in/santo-jacob-koshy-242852190/" > <LinkedInIcon /> </a>
            <a href="mailto:ben_b200914ec@nitc.ac.in"><MailIcon /></a>

          </div>
        </a>

        <a ><img src="students/Sanjana.jpg" alt="" />

          <div className='name'>
            <h3>Sanjana D V</h3>

            <a href="http://linkedin.com/in/sanjana-d-v-506832219" > <LinkedInIcon /> </a>
            <a href="mailto:sanjana_b200870ec@nitc.ac.in"><MailIcon /></a>

          </div>
        </a>

        <a ><img src="students/IMG_20220606_093518-01.jpeg" alt="" />

          <div className='name'>
            <h3>Kalyani G</h3>

            <a href="https://www.linkedin.com/in/kalyani-gopakumar-84472421b" > <LinkedInIcon /> </a>
            <a href="mailto:kalyani_b200345pe@nitc.ac.in"><MailIcon /></a>

          </div>
        </a>

        <a ><img src="students/T NAGA VENKATA SIVA KUMAR TEJA.jpg" alt="" />

          <div className='name'>
            <h3>T N V SIVA KUMAR TEJA</h3>

            <a href="https://www.linkedin.com/in/santo-jacob-koshy-242852190/" > <LinkedInIcon /> </a>
            <a href="mailto:naga_b201269mt@nitc.ac.in"><MailIcon /></a>

          </div>
        </a>


      </section>
    </div>


  );
}

export default StudentCard;
