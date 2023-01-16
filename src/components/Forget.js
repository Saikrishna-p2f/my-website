import React from 'react';
import style from './Slogin.module.css'
import Header from './Header1'
import Signup from './StudentSignup'
import Enroll from './Enroll'
import { Link } from 'react-router-dom';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Forget() {
    return (
        <React.Fragment>
            <Header />
            <div className={style.body}>
                <div className={style.border}>
                    <div className={style.center}>
                        <div className={style.img}></div>
                        <div className={style.log}>
                            <div className={style.logs}>
                                <div className={style.Login}>
                                    <h3><b>Reset Password</b></h3>
                                </div>
                                <div className={style.icons}>
                                </div>
                            </div>

                            <form action='' >
                                <div className={style.user}>
                                    <label className='label' for=''>Email Id</label>
                                    <input type='email' className={style.formcontrol} required="" placeholder='Email Id' />
                                </div>
                                <div className={style.user}>
                                    <label className='label' for=''>Mobile No</label>
                                    <input type='text' className={style.formcontrol} required="" placeholder='Mobile No' />
                                </div>



                                <div >
                                    <form id="otpForm">
                                        <div className="input-field">
                                            <label>Enter OTP</label>
                                            <input type="text" placeholder="One time password" name="otp_value" autoComplete="false" />

                                            <button >
                                                Send OTP
                                            </button>

                                        </div>
                                    </form>
                                </div>





                                <div className={style.user}>
                                    <label className='label' for=''>Password</label>
                                    <input type='password' className={style.formcontrol} required="" placeholder='Password' />
                                </div>
                                <div className={style.user}>
                                    <label className='label' for=''>Confirm Password</label>
                                    <input type='text' className={style.formcontrol} required="" placeholder='Confirm Password' />
                                </div>
                                <div className={style.user}>
                                    <button type='submit' className={style.formcontrol}>Submit</button>
                                </div>




                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Forget
