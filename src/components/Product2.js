







import React from 'react';
import prod from './product.css';
import Header from './Header1'
import kalam from '../images/kalam.png';
import homestyle from './Homestyle.module.css';
import CardDetails from './EmbeddedDetails'

export default function Product2() {
  const [showPopup, setShowPopup] = React.useState(false);
  return (
    <React.Fragment>
      <Header />
      
      <div className={homestyle.outerBody}>
        <div style={{ color: "red" }}><center><h1>Embedded Courses</h1></center></div>
        <div className={homestyle.cardBody}>
          {
            CardDetails.map((icon, index) => {
              return (

                <div className={homestyle.container} key={index}>
                  <div className={homestyle.card}>
                    <div className={`${homestyle.face} ${homestyle.face1}`}>
                      <div style={{ backgroundColor: "Pink" }}>
                        <div className={homestyle.card_img}>
                          <img src={icon.page} />
                          <h3 style={{ "font-size": "15px", backgroundColor: "lightblue", }}>{icon.CourseName}</h3>
                        </div></div>
                    </div>
                    <div className={`${homestyle.face} ${homestyle.face2}`}>
                      <div className={homestyle.content}>
                        <p><br />Duration:{icon.CourseDuration}<br />Price:{icon.Fee}</p>
                        {/* <Link to='syllabus'>View</Link>  */}
                        {/* <div onMouseOver={() => setShowPopup(true)} onMouseOut={() => setShowPopup(false)}>
                          <button style={{backgroundColor:"grey"}}>View</button>
                          {showPopup && (
                            <div><strong>{icon.Description}</strong></div>
                          )}
                        </div> */}
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


