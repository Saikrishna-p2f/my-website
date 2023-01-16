import React, { useState } from 'react'
import signstyle from './Ssignup.module.css';
//import startFirebase from "./FirebaseConfig"
//import { collection, addDoc } from "firebase/firestore"
import Header from './Header1'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import makeToast from './Toaster';
//import { GrInstagram } from 'react-icons/gr';

const Signup = (props) => {
    //const db = startFirebase();
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        contact_no: "",
        passwd: ""
    })
    //const usersCollectionRef = collection(db.getDatabase, "User");
    // const createUser = async () => {
    //     await addDoc(usersCollectionRef, state);

    // };
    const [auth, setAuth] = useState(false);
    let navigate = useNavigate();
    //const { first_name, last_name, email, contact_no, passwd } = state;
    const addScreen = () => {
        navigate("/login");
    }
    const add = (event) => {
        event.preventDefault(); // Don't want to page refresh
        if (state.first_setStatename === "" || state.last_name === "" || state.email === "" || state.contact_no === "" || state.passwd === "") {
            alert("All the fields are mandatory!");

            return;
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)) {
            alert('Invalid email address');
            return;
        }
        else if (!/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(state.contact_no)) {
            alert('Invalid Mobile no.');
            return;
        }
        else if (state.contact_no.length !== 10) {
            alert('Invalid Mobile no.');
            return;
        }

        else if (auth) {

            //createUser();
            // axios.post('https://training-82f2c-default-rtdb.firebaseio.com/User.json', state).then(() => alert("submitted successfully"))
            // props.getValue(state); // to send value child to parent

            // setState({ first_name: "", last_name: "", email: "", contact_no: "", passwd: "" }) // after clicking the input will be get empty
            axios.post("http://localhost:8000/signup", {
                first_name: state.first_name,
                last_name: state.last_name,
                email: state.email,
                passwd:state.passwd,
                contact_no: state.contact_no
            }).then((response) =>{
                console.log(response.data)
                makeToast("Success", response.data.message)
            })
            .catch((err) => {
                makeToast("error", err.response.data.message)
            })
            console.log(state);
            addScreen();
        }
    }

    return (
        <React.Fragment>
            <Header />
            <div className={signstyle.body}>

                <div className={signstyle.border}>
                    <div className={signstyle.center}>
                        <div className={signstyle.img}></div>
                        <div className={signstyle.log}>
                            <div className={signstyle.logs}>

                                <div className={signstyle.Login}>
                                    <h3><b>Signup</b></h3>
                                </div>
                                {/* <div className={signstyle.icons}>
                                    <a href="http://www.facebook.com"><span>
                                        <FontAwesomeIcon className='social-media' icon={faFacebook} />
                                    </span></a>

                                    <a href="http://www.twitter.com"><span>
                                        <FontAwesomeIcon className='social-media' icon={faTwitter} />
                                    </span></a>
                                </div> */}
                            </div>
                            <div>
                                <form onSubmit={add}>
                                    <div className={signstyle.user}>
                                        <label className='label' htmlFor='firstname'>First Name</label>
                                        <input id='firstname' type='text' className={signstyle.formcontrol}
                                            required=""
                                            placeholder='First Name'
                                            value={state.first_name}
                                            onChange={(event) => setState({ ...state, first_name: event.target.value })} />
                                    </div>
                                    <div className={signstyle.user}>
                                        <label className='label' htmlFor='lastname'>Last Name</label>
                                        <input id='lastname' type='text' className={signstyle.formcontrol}
                                            required=""
                                            placeholder='Last Name'
                                            value={state.last_name}
                                            onChange={(event) => setState({ ...state, last_name: event.target.value })} />
                                    </div>
                                    <div className={signstyle.user}>
                                        <label className='label' htmlFor='emailid'>Email-ID</label>
                                        <input id='emailid' type='text' className={signstyle.formcontrol}
                                            required=""
                                            placeholder='Email-ID'
                                            value={state.email}
                                            onChange={(event) => setState({ ...state, email: event.target.value })} />
                                    </div>
                                    <div className={signstyle.user}>
                                        <label className='label' htmlFor='contactno'>Contact No</label>
                                        <input id='contactno' type='text' className={signstyle.formcontrol}
                                            required=""
                                            placeholder='Contact Number'
                                            value={state.contact_no}
                                            onChange={(event) => setState({ ...state, contact_no: event.target.value })} />
                                    </div>
                                    <div className={signstyle.user}>
                                        <label className='label' htmlFor='password'>Password</label>
                                        <input id='password' type='text' className={signstyle.formcontrol}
                                            required=""
                                            placeholder='Password'
                                            value={state.passwd}
                                            onChange={(event) => setState({ ...state, passwd: event.target.value })} />
                                    </div>
                                    <div className={signstyle.user}>
                                        <button type='submit' className={signstyle.formcontrol} onClick={() => setAuth(true)}>Sign Up</button>
                                    </div>

                                    <div className={signstyle.user} id='userforgot'>
                                        {/* <div className={signstyle.checkBox}>
                                    <label for="">
                                        <input className='checkbox' type="checkbox" />&nbsp;
                                        <b>Remember Me</b>
                                    </label>

                                </div> */}
                                    </div>

                                </form>
                            </div>
                        </div>


                    </div>
                </div>



            </div>
        </React.Fragment>
    )
}


export default Signup
