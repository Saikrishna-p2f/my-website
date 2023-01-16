import React from 'react'
import syllabus from './syllabus.module.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Syllabus1() {
    let navigate = useNavigate();
    const addScreen = () => {
    navigate("/enroll");
    }
    return (
        <div>
            <section className={syllabus.sec}>

                <div className={syllabus.post}>
                    <ul>
                        <h5>Development - Programming Languages - Machine Learning</h5>
                        <h3>Learn Machine Learning: The complete Machine Learning Course </h3>
                        <h4>Machine learning is a subfield of artificial intelligence, which is broadly</h4>
                        <h4>defined as the capability of a machine to imitate intelligent human behavior. </h4>
                        <h2>
                            <p>4.5 **** </p><h5>(3,665 ratings)</h5> 21,553 students
                        </h2>
                        <h4> Created by <a>Arthur Samuel</a></h4>

                    </ul>
                </div>


                <div className={syllabus.row}>
                    <div className={syllabus.col1}>

                        <div className={syllabus.post1}>
                            <h4>Course content:</h4>
                            <ul>
                                <li>Getting Started</li>
                                <li>Predictive Models</li>
                                <li>Machine Learning With Python Recommended Systems</li>
                                <li>Recommended Systems</li>
                                <li>More Data Mining And Machine Learning Techniques</li>
                                <li>Dealing With Real-World Data</li>
                                <li>Apache Spark: Machine Learning On Big Data</li>
                                <li>Experimental Design/ML in the Real World</li>
                            </ul>
                        </div>
                        <div className={syllabus.post1}>
                            <h4>What you'll learn:</h4>
                            <ul>
                                <li>Clean your input data to remove outliers</li>
                                <li>Build artificial neural networks with Tensorflow and Keras</li>
                                <li>Data Visualization with MatPlotLib and Seaborn</li>
                            </ul>
                        </div>

                        <div className={syllabus.post1}>
                            <h4>Requirements:</h4>
                            <ul>
                                <li>Some prior coding or scripting experience is required.</li>
                                <li>At least high school level math skills will be required.</li>
                                <li>You'll need a desktop computer (Windows, Mac, or Linux) capable of running Anaconda 3 or
                                    newer.
                                    The
                                    course will walk you through installing the necessary free software.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={syllabus.col2}>
                        <img src="GettyImages.jpg" className={syllabus.img}/>
                            <div className={syllabus.rigbox}>
                                <h2>Future of Machine Learning</h2>
                                <link rel="stylesheet"
                                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                                    <h3>$ 26,775</h3>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type='button' onClick={addScreen}>ENROLLNOW</button>
                                    <h3><b>This course includes: </b></h3>
                                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14 hours on-demand video
                                    </h5>
                                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 article</h5>
                                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 downloadable resources</h5>
                                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Full lifetime access</h5>
                                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Access on mobile and TV
                                    </h5>
                                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Certificate of completion
                                    </h5>
                                    <a href="#">Share</a>
                                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                    <a href="#">Get the Link</a>
                            </div>


                    </div>
                </div>

            </section>

        </div>
    )
}

export default Syllabus1
