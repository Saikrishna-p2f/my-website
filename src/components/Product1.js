import React from 'react';
import prod from './product.css';
import Header from './Header1'
import kalam from '../images/kalam.png';
import homestyle from './Homestyle.module.css';
import CardDetails from './VlsiDetails'


export default function Product1() {
  
  return (
    <React.Fragment>
    <Header />
   
    <div><h1 style={{color:"red", textAlign:"center"}}>VLSI COURSES</h1></div>
    <div className={homestyle.outerBody}>
        <div className={homestyle.cardBody}>
          {
            CardDetails.map((icon, index) => {
              return (

                <div className={homestyle.container} key={index}>
                  <div className={homestyle.card}>
                    <div className={`${homestyle.face} ${homestyle.face1}`}>
                      <div style={{backgroundColor:"Pink"}}>
                      <div className={homestyle.card_img}>
                        <img src={icon.page} />
                        <h3 style={{ "font-size": "15px",backgroundColor:"lightblue", }}>{icon.CourseName}</h3>
                      </div></div>
                    </div>
                    <div className={`${homestyle.face} ${homestyle.face2}`}>
                      <div className={homestyle.content}>
                        <p><br/>Duration:{icon.CourseDuration}<br />Price:{icon.Fee}</p>
                        {/* <Link to='syllabus'>View</Link> */}
                      </div>

                    </div>
                  </div>




                </div>
              )
            })
          }
        </div>
      </div>




    </React.Fragment>
  );
}


