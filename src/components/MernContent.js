
import React from "react";
import content from "./content.module.css";
import atmImg from "../images/MERN_IMAGE.png";

import {
  FaAlgolia,
  FaBook,
  FaCloudDownloadAlt,
  FaTabletAlt,
  FaCogs,
  FaLink,
  // FaAudioDescription,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";


function MernContent() {
  return (
    <div className={content.body}>
      <div className={content.cardImg}>
        <img src={atmImg} height="400px" width="80%" alt="img"></img>

        <div className={content.card}>
          <ul style={{ listStyleType: "none" }}>
            <h4>This Courses include</h4>
            <br></br><b>
              <li>
                <i style={{ fontSize: "15px" }}>
                  <FaAlgolia />
                </i>
                &nbsp;&nbsp;&nbsp;52 hours
              </li>
              <br></br>
              <li>
                <i style={{ fontSize: "15px" }}>
                  <FaBook />
                </i>
                &nbsp;&nbsp;&nbsp;75 articles
              </li>
              <br></br>
              <li>
                <i style={{ fontSize: "15px" }}>
                  <FaCloudDownloadAlt />
                </i>
                &nbsp;&nbsp;&nbsp;Downloadable resources
              </li>
              <br></br>
              <li>
                <i style={{ fontSize: "15px" }}>
                  <FaCogs />
                </i>
                &nbsp;&nbsp;&nbsp;Full lifetime access
              </li>
              <br></br>
              <li>
                <i style={{ fontSize: "15px" }}>
                  <FaTabletAlt />
                </i>
                &nbsp;&nbsp;&nbsp;Access on mobile and TV
              </li>
              <br></br>
              <li>
                <i style={{ fontSize: "15px" }}>
                  <FaLink />
                </i>
                &nbsp;&nbsp;&nbsp;Assignments
              </li>
              <br></br>
              <li>
                <i style={{ fontSize: "15px" }}>
                  <GrCertificate />
                </i>
                &nbsp;&nbsp;&nbsp;Certificate of completion
              </li></b>
            <br></br>
          </ul>
          <button type="submit">Enroll Courses</button>

        </div>
      </div>


      <div className={content.Rating}>
        <div className={content.Jdiscription}>
          <b><h1>MERN for Beginners</h1></b>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <b>
          <h3 style={{ backgroundColor: "lightblue", fontSize: "30px" }}>
            $4.99
          </h3>
        </b>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <div className={Content.}>
      <chatImg />
    </div> */}



        <div className={MernContent.Content}>
       
        </div>
      </div>
     

      <div className={content.star}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        <FaRegStar />
      </div>

      <div>
        <br></br>
        <p className={content.para}>
        Basics of Web Application, Structuring Webpage using HTML, Styling Webpage using CSS3, Styling using Bootstrap 4, Add Behavior to Website using JavaScript, Serving and
Retrieving Data using AJAX, JSON & XMLIntroduction to ReactJS, Components in ReactJS, Functional Component, Class
based Component, Properties & Events, Forms Components, Accessing DOM, React
Router, Context API, React Hooks, Redux, React Developer Tool in Chrome, AjaxEnvironment Setup, Internals, Module System, Package Management, File I/O, Web
Servers, Express Framework, REST API, Testing APIs,
        </p>
        <br></br>

        <div className={content.Jdiscription}>
          <h2>MERN Stack</h2>
        </div>
        <br></br>
        <p className={content.para}>
        Introduction to Databases, Entities & Relationships, Basics of CRUD, Creating Documents,
        </p>
        <br></br>
        <div className={content.Jdiscription}>
          <h2>What We'll Learn Here</h2>
        </div>
        <br></br>
        <p className={content.para}>
          HTML to define the content of web pages
          CSS to specify the layout of web pages JavaScript to program
          the behavior of web pages JavaScript accepts both double and
          single quotes
        </p>
        <br></br>
        <div className={content.Jdiscription}>
          <h2>Reqirements</h2>
        </div>
        <br></br>
        <p className={content.para}>
        Basic knowledge of computer programming languages. 
          Interest in software and software building. Knowledge of operating systems.
          Critical Thinking.
        </p>
        <br></br>
      </div>
      {/* <img src={chatImg} height="150px" width="150px" alt="img" ></img> */}
    </div>

  );

  //***pythan */    
  

}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<MernContent />, rootElement);




export default MernContent;