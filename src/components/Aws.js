
import React from "react";
import content from "./content.module.css";
import atmImg from "../images/AWS_image.jpeg";

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


function Aws() {
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
          <b><h1>AWS for Beginners</h1></b>
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



        <div className={Aws.Content}>
       
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
        Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers.

        </p>
        <br></br>

        <div className={content.Jdiscription}>
          <h2>AWS</h2>
        </div>
        <br></br>
        <p className={content.para}>
        AWS (Amazon Web Services) is a cloud computing platform.
        The first product (S3) was released in 2006.
        AWS has grown a lot since then in both size and product range.
        It is, to date, the largest cloud provider in the world.
        </p>
        <br></br>
        <div className={content.Jdiscription}>
          <h2>What We'll Learn Here</h2>
        </div>
        <br></br>
        <p className={content.para}>
        AWS is the largest of the cloud providers
        AWS competence is popular in the job market
        You can do most things in the AWS Cloud
        Big community/support
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
// ReactDOM.render(<Aws />, rootElement);




export default Aws;