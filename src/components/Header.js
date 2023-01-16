import React, { useState } from 'react'
import homestyles from './Header.module.css';
import { FaSearch, FaTimesCircle, FaBars, FaArrowRight } from 'react-icons/fa';
import logo from '../images/sibney.jpg'
import { FaCartArrowDown } from 'react-icons/fa';
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { MdPolymer } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";


// ********* import Link **********
import { Link } from 'react-router-dom';
function Header() {
    const [userInput, setUserInput] = useState("");
    const mystyle = {
        position: "relative",
        left: "-20px",
        transition: "0.5s ease-in-out"

    };
    const [click, setClick] = useState(true)

    const [baropen, setBaropen] = useState(false)
    const onchangeHandlar = (e) => {

        setUserInput(e.target.value)
        //const text=userInput;
        //console.log(userInput);
        matchReply(userInput)
    }
    function matchReply(text) {
        let item;
        let items;
        const trigger = [

            ["java"],
            ["courses"],
            ["python"]
        ];

        const reply = [

            ["Cost of the Java Course: 45000rs, Duration is & months with projects and test at regular intervals"],
            ["We provide s python, java, HTML, CSS, Devops, Machine Learning,Linux, NodeJS, ReactJS, AWS, Data Analysis",
                "Our training programme provides python, java, HTML, CSS, Devops, Machine Learning, Linux, NodeJS, ReactJS, AWS, Data Analysis"],
            ["Cost of the Python Course: 45000rs, Duration is & months with projects and test at regular intervals"]
        ];

        for (let x = 0; x < trigger.length; x++) {
            for (let y = 0; y < reply.length; y++) {
                if (text.includes(trigger[x][y])) {
                    items = reply[x];
                    // item = items[Math.floor(Math.random() * items.length)];
                    item = items[y]
                    alert(items)
                    //  console.log(item)
                    // setUserHistory([...response ,item])
                    //setUserHistory(item)               

                    
                }
            }
        }
        

    }
    // function generateReply(trigger, reply, text) {
    //     let item;
    //     let items;
    //     for (let x = 0; x < trigger.length; x++) {
    //         for (let y = 0; y < reply.length; y++) {
    //             if (text.includes(trigger[x][y])) {
    //                 items = reply[x];
    //                 // item = items[Math.floor(Math.random() * items.length)];
    //                 item = items[y]

    //                 //  console.log(item)
    //                 // setUserHistory([...response ,item])
    //                 //setUserHistory(item)               

    //                 alert(item)
    //             }
    //         }
    //     }
    // }
    return (
        <React.Fragment>
            <header>
                <a href='#' ><img src={logo} className={homestyles.logo}></img></a>
                <div className={homestyles.group}>
                    <ul id={homestyles.navigation} className={baropen ? `#navigation ${homestyles.active}` : "#navbar"}>
                        <li><Link to="/">Home</Link></li>

                        <li><Link to="login">Login</Link></li>
                        <li><Link to="signup">Signup</Link></li>
                        <li><Link to="Enroll">Enroll</Link></li>
                        <li><Link to="products" style={{ fontsize: "50px" }}><FaCartArrowDown /></Link></li>

                        <li><a href="https://www.facebook.com/profile.php?id=100088386918369"><BsFacebook /></a></li>
                        <li><a href="https://www.instagram.com/picotwofemto/"><GrInstagram /></a></li>
                        <li><a href="https://twitter.com/p2fsemi"><BsTwitter /></a></li>
                        <li><a href="https://in.linkedin.com/company/p2fsemi"><AiFillLinkedin /></a></li>
                        <li><a href="https://www.ambitionbox.com/salaries/p2f-semi-salaries"><MdPolymer /></a></li>

                    </ul>
                    <div className={homestyles.search}>
                        <span className={homestyles.icon}>
                            {
                                click ?
                                    <i className={homestyles.searchBtn} onClick={() => setClick(click => !click)}><FaSearch /></i> :
                                    <div>
                                        <i style={mystyle}><FaSearch /></i>
                                        <i className={homestyles.closeBtn} style={{ zIndex: "13" }} onClick={() => setClick(click => !click)}><FaArrowRight /></i>
                                    </div>

                            }
                        </span>
                    </div>
                </div>

                <div className={click ? homestyles.searchBox : homestyles.showSearchBox}>
                    <input type={'text'} placeholder="Search ..." value={userInput} onChange={onchangeHandlar} />
                </div>

                {
                    click
                    &&
                    <div className={homestyles.barbtn}>
                        <i onClick={() => setBaropen(baropen => !baropen)}>
                            {
                                baropen ? <FaTimesCircle /> : <FaBars />
                            }
                        </i>

                    </div>
                }
            </header>
        </React.Fragment>
    )
}

export default Header


