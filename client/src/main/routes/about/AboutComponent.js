import React from "react";
import "./about.css";
import about from "./about-img.jpg";
import css from "./css3.png";
import nodejs from "./nodejslogo.png";
import html5 from "./HTML5.png";
import js from "./JS.png";
import mongodb from "./mongodb.png";
import react from "./react.png";
import git from "./git-logo.png";

function AboutComponent(){
    return(
        <div className="about-wrapper">
          <br/>
          <p> This app is a virtual flashcard collection
          for learning new language. User can:</p>
              <ul>
                  <li> Study preloaded  flashcards </li>
                  <li> Add new flashcard </li>
                  <li> Track their progress  </li>
              </ul>

          <img className="about-bg" src={about} alt=""/>
          <div className="info">
          <p > The app is made by <i><a href="" target="" >Mak</a> and <a href="" target="" >Phat</a></i></p>{/*//this will have links to our profile or resume*/}
              <ul>
                  <li> It is a RESTful API  </li>
                  <li> Uses token authentication  </li>
                  <li> ReactJS on front-end for user interface and interaction  </li>
                  <li> NodeJS and Express for  Back-end with MongoDB for noSQL database manager</li>
              </ul>
          </div>
              <div className="about-icons">
              <img src={react} alt=""/>
              <img src={mongodb} alt=""/>
              <img src={git} alt="" />
              <img src={html5} alt=""/>
              <img src={nodejs} alt=""/> 
              <img src={js} alt=""/>
              <img src={css} alt=""/>
              </div>

        </div>
    )
}

export default AboutComponent;
