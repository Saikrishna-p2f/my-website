// import React from "react";
// import content from "./content.module.css";
// import atmImg from "../images/pic.jpg";
// // import chatImg from "../images/r1.jpg";
// // import popUp from "./Popup";

  
// import {
//   FaAlgolia,
//   FaBook,
//   FaCloudDownloadAlt,
//   FaTabletAlt,
//   FaCogs,
//   FaLink,
//   // FaAudioDescription,
//   FaStar,
//   FaStarHalfAlt,
//   FaRegStar,
// } from "react-icons/fa";
// import { GrCertificate } from "react-icons/gr";

// function Content() {
//   return (
//     <div className={content.body}>
//       <div className={content.cardImg}>
//         <img src={atmImg} height="400px"  width="80%"alt="img"></img>
//         {/* <img onmouseover="bigImg(this)" onmouseout="normalImg(this)" border="0" src="r1.jpg" alt="Smiley" width="32" height="32"></img> */}
//         <div className={content.card}>
//           <ul style={{ listStyleType: "none" }}>
//             <h4>This Courses include</h4>
//             <br></br><b>
//             <li>
//               <i style={{ fontSize: "15px" }}>
//                 <FaAlgolia />
//               </i>
//               &nbsp;&nbsp;&nbsp;52 hours
//             </li>
//             <br></br>
//             <li>
//               <i style={{ fontSize: "15px" }}>
//                 <FaBook />
//               </i>
//               &nbsp;&nbsp;&nbsp;75 articles
//             </li>
//             <br></br>
//             <li>
//               <i style={{ fontSize: "15px" }}>
//                 <FaCloudDownloadAlt />
//               </i>
//               &nbsp;&nbsp;&nbsp;Downloadable resources
//             </li>
//             <br></br>
//             <li>
//               <i style={{ fontSize: "15px" }}>
//                 <FaCogs />
//               </i>
//               &nbsp;&nbsp;&nbsp;Full lifetime access
//             </li>
//             <br></br>
//             <li>
//               <i style={{ fontSize: "15px" }}>
//                 <FaTabletAlt />
//               </i>
//               &nbsp;&nbsp;&nbsp;Access on mobile and TV
//             </li>
//             <br></br>
//             <li>
//               <i style={{ fontSize: "15px" }}>
//                 <FaLink />
//               </i>
//               &nbsp;&nbsp;&nbsp;Assignments
//             </li>
//             <br></br>
//             <li>
//               <i style={{ fontSize: "15px" }}>
//                 <GrCertificate />
//               </i>
//               &nbsp;&nbsp;&nbsp;Certificate of completion
//             </li></b>
//             <br></br>
//           </ul>
//           <button type="submit">Enroll Courses</button>
  
//         </div>
//       </div>
    

//       <div className={content.Rating}>
//         <div className={content.Jdiscription}>
//           <b><h1>JAVASCRIPT BIGNNER COURSES</h1></b>
//         </div>
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
//         <b>
//           <h3 style={{ backgroundColor: "lightblue", fontSize: "30px" }}>
//             $4.99
//           </h3>
//         </b>
        
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        

       

//         <div className={content.Content}>
        
//           {/* <img src={chatImg} height="150px" width="150px" onClick={this.handleShowDialog}></img> */}
//           {this.state.isOpen && (
            
//           <dialog
//             className="dialog"
//             style={{ position: "absolute" }}
//             open
//             onClick={this.handleShowDialog}
//           >
//             <img
//               className="image"
//               src="chatImg"
//               onClick={this.handleShowDialog}
//               alt="no image"
//             />
//           </dialog>
//         )}
//         </div>
//       </div>


    
//       <div className={content.star}>
//         <FaStar />
//         <FaStar />
//         <FaStar />
//         <FaStarHalfAlt />
//         <FaRegStar />
//       </div>

//       <div>
//         <br></br>
//         <p className={content.para}>
//           JavaScript is the Programming Language for the Web. JavaScript can
//           update and change both HTML and CSS. It can calculate,
//           manipulate and validate data.Javascript is used by
//           programmers across the world to create dynamic and interactive web
//           content like applications and browsers. JavaScript is so
//           popular that it's the most used programming language in the world,
//           used as a client-side programming language by 97.0% of all websites.
//           Nowadays, JavaScript is an all-purpose programming
//           language—meaning it runs across the entire software stack.
//           The most popular application of it is on the client side (aka
//           frontend), but since Node. js came on the scene, many people
//           run JavaScript on the server side (aka backend) as well.
//         </p>
//         <br></br>

//         <div className={content.Jdiscription}>
//           <h2>JAVASCRIPT</h2>
//         </div>
//         <br></br>
//         <p className={content.para}>
//           JavaScript is the world's most popular programming language.
//           JavaScript is the programming language of the Web. JavaScript is easy
          
//           to learn. This tutorial will teach you JavaScript from basic to
//           advanced.
//         </p>
//         <br></br>
//         <div className={content.Jdiscription}>
//           <h2>What We'll Learn Here</h2>
//         </div>
//         <br></br>
//         <p className={content.para}>
//           HTML to define the content of web pages
//           CSS to specify the layout of web pages JavaScript to program
//           the behavior of web pages JavaScript accepts both double and
//           single quotes
//         </p>
//         <br></br>
//         <div className={content.Jdiscription}>
//           <h2>Reqirements</h2>
//         </div>
//         <br></br>
//         <p className={content.para}>
//           Basic knowledge of computer programming languages. Interest
//           in software and software building. Knowledge of operating
//           systems.
//           Critical Thinking.
//         </p>
//         <br></br>
//       </div>
     
//     </div>
    
//   );

  
   
    
//   }
  


// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<Content />, rootElement);




// export default Content;



import React from "react";
import content from "./content.module.css";
import atmImg from "../images/pic.jpg";

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

function Content() {
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
          <b><h1>JAVA for BIGNNER</h1></b>
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



        <div className={Content.Content}>
       
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
          Java is the Programming Language for the Web. JavaScript can
          update and change both HTML and CSS. It can calculate,
          manipulate and validate data.Javascript is used by
          programmers across the world to create dynamic and interactive web
          content like applications and browsers. JavaScript is so
          popular that it's the most used programming language in the world,
          used as a client-side programming language by 97.0% of all websites.
          Nowadays, JavaScript is an all-purpose programming
          language—meaning it runs across the entire software stack.
          The most popular application of it is on the client side (aka
          frontend), but since Node. js came on the scene, many people
          run JavaScript on the server side (aka backend) as well.
        </p>
        <br></br>

        <div className={content.Jdiscription}>
          <h2>Description</h2>
        </div>
        <br></br>
        <p className={content.para}>
          JavaScript is the world's most popular programming language.
          JavaScript is the programming language of the Web. JavaScript is easy

          to learn. This tutorial will teach you JavaScript from basic to
          advanced.
        </p>
        <br></br>
        <div className={content.Jdiscription}>
          <h2>Duration</h2>
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
          <h2>Tools</h2>
        </div>
        <br></br>
        <p className={content.para}>
          Basic knowledge of computer programming languages. Interest
          in software and software building. Knowledge of operating
          systems.
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
// ReactDOM.render(<Content />, rootElement);




export default Content;