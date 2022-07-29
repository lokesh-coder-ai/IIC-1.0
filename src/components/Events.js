import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import "./events.css";

function Event() {
  return (
    <div id="events">
      <span>
        <i className="bg far fa-calendar"></i>
        <p className="event-heading">Events</p>
      </span>

      <div class="main">
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="../eventgallery/event1.png" />
              </div>
              <div class="card_content">
                <h2 class="card_title">CONNECT Part I: Idea & Innovation</h2>
                <p class="card_text">
                  Dr. Sudeep P V, Convenor, IIC-NITC, talked with students and
                  discussed various IIC activities, the need of translating
                  ideas into business ideas, and other topics with them
                </p>
                <a href="https://drive.google.com/file/d/14sp1fjpWpm-TOP-4v1ZVA29_nAP6jNm7/view?usp=sharing">
                  <button class="btn card_btn">Minutes</button>
                </a>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="../eventgallery/event2.png" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Part II: Student Entrepreneurship</h2>
                <p class="card_text">
                  Dr. Sudeep P V, Convenor, IIC-NITC interacted with students
                  about startups on campus: opportunities and challenges, as
                  well as the role of the IIC in achieving it.
                </p>
                <a href="https://drive.google.com/file/d/16VHrGNZRY3DCMiPrEZQp0yxzr2nxLFgK/view?usp=sharing">
                  <button class="btn card_btn">Minutes</button>
                </a>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="../eventgallery/event3.png" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Innovations to start-ups</h2>
                <p class="card_text">
                  To disseminate the recent developments and novel techniques
                  related to startup initiatives.
                  <br />
                  <br />
                  <b> On 15 JUNE 2022,WEDNESDAY </b>
                </p>
                <a href="https://drive.google.com/file/d/1WCkX6XIX_KP1IuKOen-0Xnn8jTNDMXgn/view?usp=sharing">
                  <button class="btn card_btn">Minutes</button>
                </a>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="../eventgallery/img14.jpeg" />
              </div>
              <div class="card_content">
                <h2 class="card_title">World Intellectual Property Day-2022</h2>
                <p class="card_text">
                Shri. N.P. Rajive (Vice-chairman, National Innovation Foundation - NIF, Govt. of India) was the Chief Guest.
            
                </p>
                <a href="https://drive.google.com/file/d/1ItMMtfRA5uz8g2AEzhGzdYT_vTO9OyU6/view?usp=sharing">
                  <button class="btn card_btn">Minutes</button>
                </a>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="../eventgallery/img15.png" />
              </div>
              <div class="card_content">
                <h2 class="card_title">Prototype Design and Development</h2>
                <p class="card_text">
                The Institute Innovation Cell (IIC) of NITC conducted a workshop on 'Prototype Design and Development'.
                </p>
                <br></br>
                <a href="https://drive.google.com/file/d/1p6sxMecONlvYcpscc6CoT-S5rVqtE1wO/view?usp=sharing">
                  <button class="btn card_btn">Minutes</button>
                </a>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="../eventgallery/img17.png" />
              </div>
              <div class="card_content">
                <h2 class="card_title">World Earth Day-2022</h2>
                <p class="card_text">
                NIT Calicut organized 'World Earth Day' celebrations at the nearby Chenoth
                Govt. LP School on 22nd April 2022. A new Science Lab was also opened at
                the school  with NITC support. </p>
                <a href="https://drive.google.com/file/d/1eTy-DrdsiHcyPOyN0NF-NH5xU0nbXk1W/view?usp=sharing">
                  <button class="btn card_btn">Minutes</button>
                </a>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Event;
