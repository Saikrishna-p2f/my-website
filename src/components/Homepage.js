

import React, { useState } from 'react'
import homestyle from './Homestyle.module.css'
// import arrow from '../image/arrow.png'
// import python from '../images/Login_form.jpg';
// import learn from '../images/learning.jpg';

// import { FaBars, FaSearch, FaStar, FaStarHalfAlt, FaPython } from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import { useNavigate } from "react-router-dom";


// ***** Importing Header and Footer ******
import Header from './Header'
import Footer from './Footer';
import CardDetails from './CardDetails1';
import product1 from './Product1';

import chatImg from "../images/r1.jpg";
// ***** Importin pages end Here *********

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import kalam from '../images/kalam.png';
import { icon } from '@fortawesome/fontawesome-svg-core';



const steps = [
  {
    id: 'intro',
    message: 'Welcome to our training website',
    trigger: 'intro-user',
  },
  {
    id: 'intro-user',
    user: true,
    trigger: "hi"
  },
  {
    id: 'hi',
    message: "Hello",
    trigger: "how are you",
  },

  {
    id: "how are you",
    message: "how are you?",
    trigger: "how r u reply",
  },
  {
    id: "how r u reply",
    user: true,
    trigger: "bot reply"
  },
  {
    id: "bot reply",
    message: "It's glad to hear",
    trigger: "name",
  },
  {
    id: "name",
    message: "May I know Your Name? ",
    trigger: "enterName",
  },
  {
    id: "enterName",
    user: true,
    trigger: "userName",
  },
  {
    id: "userName",
    message: "{previousValue},how can I help You?",
    trigger: "courses"
  },
  {

    id: "courses",
    user: true,
    trigger: "coursesavailable",
  },



  {
    id: 'coursesavailable',
    message: "React Js,MERN Stack ,MEAN Stack, Python,Java,Devops,DataAnalyst,Networking,Node.js,Embdded,Vlsi,AWS",
    trigger: "selectCourse",
  },
  {
    id: "selectCourse",
    message: "Select your Course",
    trigger: "showcourses"
  },
  {
    id: "showcourses",
    options: [
      { value: 'P', label: "Python", trigger: "Pyhton" },
      { value: 'J', label: "Java", trigger: "Java" },
      {
        value: 'R', label: "React", trigger: "React"
      },
      { value: 'D', label: "DataAnalysis", trigger: "DataAnalysis" },
      { value: 'A', label: "AWS", trigger: "Aws" },
      { value: 'E', label: "Embedded", trigger: "Embedded" },
      { value: 'V', label: "VLSI", trigger: "Vlsi" },
      { value: 'Nd', label: "NodeJs", trigger: "NodeJs" },
      { value: 'N', label: "NetWorking", trigger: "networking" },
      { value: "Dv", label: "Devops", trigger: "Devops" },
      { value: 'Mren', label: "MERN Stack", trigger: "Mernstack" },
      { value: 'Mean', label: "Mean Stack", trigger: "MeanStack" }

    ]
  },
  {

    id: 'Mernstack',
    message: "Cost of the Mern Stack Course: 45000rs, Duration is & months with projects and test at regular intervals.",
    trigger: "tqmern"
  },
  {
    id: "MeanStack",
    message: "Cost of the Mean Stack Course: 45000rs, Duration is & months with projects and test at regular intervals.",
    trigger: "tqmean"
  },
  {

    id: "Devops",
    message: "Cost of the Devops Course: 45000rs, Duration is & months with projects and test at regular intervals.",

    trigger: "tqdev",
  },
  {
    id: "networking",
    message: "Cost of the networking Course: 45000rs, Duration is & months with projects and test at regular intervals.",
    trigger: "tqnet"

  },
  {
    id: "NodeJs",
    message: "Cost of the Nodejs Course: 45000rs, Duration is & months with projects and test at regular intervals.",
    trigger: "tqnode"

  },
  {
    id: "Embedded",
    message: "Cost of the Embedded Course: 45000rs, Duration is & months with projects and test at regular intervals.",
    trigger: "tqem"

  },
  {
    id: "Vlsi",
    message: "Cost of the Vlsi Course: 45000rs, Duration is & months with projects and test at regular intervals.",
    trigger: "tqvl"

  },


  {
    id: "Pyhton",
    message: "Cost of the python Course: 45000rs, Duration is & months with projects and test at regular intervals.",
    trigger: "tqpy"
  },

  {
    id: "Java",
    message: "Cost of the Java Course: 45000rs, Duration is & months with projects and test at regular intervals.",
    trigger: "tqjava"
  },
  {
    id: "React",
    message: "Cost of the React Course: 45000rs, Duration is & months with projects and test at regular intervals.",
    trigger: "tqreact",

  },
  {
    id: "Aws",
    message: "Cost of the Aws Course: 45000rs, Duration is & months with projects and test at regular intervals.",
    trigger: "tqaws"

  },
  {
    id: "DataAnalysis",
    message: "Cost of the DataAnalysis Course: 45000rs, Duration is & months with projects and test at regular intervals.",

    trigger: "tqdatan",
  },

  {
    id: 'tqmern',
    user: true,
    trigger: "thankyou"

  },
  {
    id: 'tqmean',
    user: true,
    trigger: "thankyou",
  },
  {
    id: 'tqdev',
    user: true,
    trigger: "thankyou",

  },
  {
    id: 'tqnet',
    user: true,
    trigger: "thankyou",

  },
  {
    id: 'tqnode',
    user: true,
    trigger: "thankyou",

  },
  {
    id: 'tqem',
    user: true,
    trigger: "thankyou",

  },
  {
    id: 'tqvl',
    user: true,
    trigger: "thankyou",

  },
  {
    id: 'tqpy',
    user: true,
    trigger: "thankyou",

  },
  {
    id: 'tqjava',
    user: true,
    trigger: "thankyou",

  },
  {
    id: 'tqreact',
    user: true,
    trigger: "thankyou",

  },
  {
    id: 'tqaws',
    user: true,
    trigger: "thankyou",

  },
  {
    id: 'tqdatan',
    user: true,
    trigger: "thankyou",

  },
  {

    id: "thankyou",
    message: " You are Welcome,Thank you for visitig  our Training website",
    trigger: "bye",
  },
  {
    id: "bye",
    user: true,
    trigger: "byemsg",
  },
  {
    id: "byemsg",
    message: "Bye! Come back again soon",
    // end: true,
    trigger: "last",

  },
  {
    id:"last",
    user:true,
    end:true,
  }


];
// Creating our own theme
const theme = {
  background: '#808080',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
  // SpeechSynthesisVoice:'red',

};

// Set some properties of the bot
const con = {
  botAvatar: chatImg,
  floating: true,
};

var notifications=[
  {   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Datascience New batch",
    time:"09pm to 12pm"
},
{   
    date:"28/12/2022",
    news:"VLSI New batch",
    time:"09pm to 12pm"
},
{   
    date:"2/01/2023",
    news:"off-campous interviews",
    time:"09pm to 12pm"
}, {   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Datascience New batch",
    time:"09pm to 12pm"
},
{   
    date:"28/12/2022",
    news:"VLSI New batch",
    time:"09pm to 12pm"
},
{   
    date:"2/01/2023",
    news:" interviews",
    time:"09pm to 12pm"
},
{   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Datascience New batch",
    time:"09pm to 12pm"
},
{   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Datascience New batch",
    time:"09pm to 12pm"
},
{   
    date:"28/12/2022",
    news:"VLSI New batch",
    time:"09pm to 12pm"
},
{   
    date:"2/01/2023",
    news:"off-campous interviews",
    time:"09pm to 12pm"
}, {   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Datascience New batch",
    time:"09pm to 12pm"
},
{   
    date:"28/12/2022",
    news:"VLSI New batch",
    time:"09pm to 12pm"
},
{   
    date:"2/01/2023",
    news:" interviews",
    time:"09pm to 12pm"
},
{   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Datascience New batch",
    time:"09pm to 12pm"
},
 {   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Datascience New batch",
    time:"09pm to 12pm"
},
{   
    date:"28/12/2022",
    news:"VLSI New batch",
    time:"09pm to 12pm"
},
{   
    date:"2/01/2023",
    news:"off-campous interviews",
    time:"09pm to 12pm"
}, {   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Datascience New batch",
    time:"09pm to 12pm"
},
{   
    date:"28/12/2022",
    news:"VLSI New batch",
    time:"09pm to 12pm"
},
{   
    date:"2/01/2023",
    news:" interviews",
    time:"09pm to 12pm"
},
{   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Datascience New batch",
    time:"09pm to 12pm"
},
{   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Datascience New batch",
    time:"09pm to 12pm"
},
{   
    date:"28/12/2022",
    news:"VLSI New batch",
    time:"09pm to 12pm"
},
{   
    date:"2/01/2023",
    news:"off-campous interviews",
    time:"09pm to 12pm"
}, {   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Datascience New batch",
    time:"09pm to 12pm"
},
{   
    date:"28/12/2022",
    news:"VLSI New batch",
    time:"09pm to 12pm"
},
{   
    date:"2/01/2023",
    news:" interviews",
    time:"09pm to 12pm"
},
{   
    date:"12/12/2022",
    news:"MERN stack New batch",
    time:"09pm to 12pm"
},
{
     
    date:"20/12/2022",
    news:"Full Stack Java New batch",
    time:"09pm to 12pm"
},
{   
    date:"26/12/2022",
    news:"Mock tests& client interviews",
    time:"09pm to 12pm"
}
]
;




function Homepage() {
  //  let navigate = useNavigate();
  //  const addScreen = () => {
  //  navigate("/syllabus");
  //  }

  const [icons, setIcons] = useState(CardDetails)


  var sEven = {
    borderRadius: "5px", padding: "2px", margin: "3px 0px", border: "2px solid green", background: "yellow"
  }
  var sOdd = {
    borderRadius: "5px", padding: "2px", margin: "3px 0px", border: "2px solid yellow", background: "yellowgreen"
  }


  return (

    <React.Fragment>
      {/*****weekdays in excel* Header *******/}
      <Header />
      {/****** Header End Here ******/}

      {/*******  Main page img *********/}
      <div style={{ postion: "absolute" }}>
        <div className={homestyle.kalamdiv}>
          <div  className={homestyle.bodyImg}>
            <div className={homestyle.imgContent}>

              <h1>
                <div>
                  <img src={kalam}></img>
                  <p><marquee>
                    * You have to dream before your dreams can come true
                    * If you want to shine like a sun, first burn like a sun.
                    * Winners are not those who never fail but those who never quit.
                    * Keep working even after you succeed.
                    * Small aim is a crime, have great aim.
                  </marquee>
                    <marquee behavior="alternate">Contact Us:9952879566 e-mail:hari@p2fsemi.com </marquee>
                  </p>
                </div>
              </h1>


            </div>
          </div>
          <div className={homestyle.latest}>
           <center><h2 style={{height:"10%",background:"powderblue",padding:"10px"}}>Latest Updates & News</h2></center> 
            <div style={{boxSizing:"border-box",height:"90%"}}>
                <marquee className={homestyle.marquee} scrollamount="5" direction="up" > 
                        <div>
                        {
                            notifications.length>0? <div>
                                {
                                    notifications.map(
                                        (item,index,arr)=>
                                            <p style={index%2==true?sEven:sOdd} key={index}><b>{item.date}</b>-{item.news}</p>
                                    )
                                }
                            </div>:null
                        }
                        </div>
                </marquee>
            </div>
        </div>
        </div>
     </div>

      {/******** Card starts here *******/}


      <div className={homestyle.cardBody}>
        {CardDetails.map((icon) => (
          <div className={homestyle.card_box} key={icon.id}>
            <div className={homestyle.card_img}>

              <Link to={icon.page}><img src={icon.Icons} alt="" />
                <p>{icon.CourseName}</p></Link>

            </div></div>))}
      </div>






      <div className="App">
        <ThemeProvider theme={theme}>
          <ChatBot

            // This appears as the header
            // text for the chat bot
            headerTitle="Training App"
            steps={steps}
            {...con}

          />
        </ThemeProvider>
      </div>











      {/******* Card Ends here *********/}


      {/******** Footer ********/}
      <Footer />
      {/********* Footer end Here *******/}


    </React.Fragment >

  )
}


export default Homepage;