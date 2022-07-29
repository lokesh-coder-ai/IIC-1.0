import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap";
import "./Eventcard.css"


function EventCard() {
  return (
  
      <div id="eventcard">
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
                  <a href="#report"><button class="btn card_btn">Minutes</button></a>
                  
                  
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
                  <a href="#report"><button class="btn card_btn">Minutes</button></a>
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
                  <a href="#report"><button class="btn card_btn">Minutes</button></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    
  );
}
export default EventCard;
