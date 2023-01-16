import React, { useState} from 'react'
import enroll from './Enroll.module.css';
//import { Link, Outlet } from 'react-router-dom';
import { json, useNavigate } from "react-router-dom";
import { text } from '@fortawesome/fontawesome-svg-core';
import { ref, uploadBytes } from 'firebase/storage'
import { storage } from './Firebase'
import Header from './Header1'

function Enroll() {
    const [name, setName] = useState()
    const [mobile, setMobile] = useState()
    const [file, setFile] = useState()
    

    let navigate = useNavigate();
    const addScreen = () => {
        navigate("/payment");
    }    

    const handleChange = (e) => {
        console.log("Handler")
        setFile(e.target.files && e.target.files[0])
        console.log(`${file.name}`)
        if (`${file.size}` > 30000) {
            alert("Upload file less than 30kb");
            e.target.value = null;
            setFile(null)
        }
       // console.log(`${file.name}`)
        
    }

    const uploadFile = (event) => {
        if (file && name && mobile) {        
            const upload = ref(storage, `CustomerFile/${name}${mobile}/${file.name}`)
            uploadBytes(upload)
            setFile("")
            alert(`${file.name} Uploaded`)
        }
        else {
            alert("Ensure your name, mobile  and file field were filled")
        }
    }



    return (
        <React.Fragment>
            <Header />
        <div>
            <tr></tr>
            {/* <Outlet /> */}
            
            <div className={enroll.wrapper}>
                <div className={enroll.title}>
                    Enrollment Form
                </div>
                <div className={enroll.form}>
                    <div className={enroll.inputfield}>
                        <label>First Name</label>
                        <input type="text" placeholder="First Name" className={enroll.input} value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className={enroll.inputfield}>
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" className={enroll.input} />
                    </div>
                    <div className={enroll.inputfield}>
                        <label className={enroll.starlabel}>Email Address</label>
                        <input type="text" placeholder="Email Address" className={enroll.input} required />
                    </div>
                    <div className={enroll.inputfield}>
                        <label>Password</label>
                        <input type="password" placeholder="Password" className={enroll.input} />
                    </div>

                    <div className={enroll.inputfield}>
                        <label>Selected Course</label>
                        <div className={enroll.custom_select}>
                            <select>
                                <option value="">Select</option>
                                <option value="male">Java</option>
                                <option value="female">Python</option>
                            </select>
                        </div>
                    </div>

                    <div className={enroll.inputfield}>
                        <label>Reference ID</label>
                        <input type="text" placeholder="Reference ID" className={enroll.input} />
                    </div>
                    <div className={enroll.inputfield}>
                        <label className={enroll.starlabel}>Enter Mobile No</label>
                        <input type="text" placeholder="Enter MobileNo" className={enroll.input} onChange={(e) => setMobile(e.target.value)} required />

                    </div>
                    <div className={enroll.inputfield}>
                        <label className={enroll.starlabel} >Photo</label>
                        <input type="file" className={enroll.input}  onInput = {handleChange} onChange={handleChange} />
                        <button className={enroll.upbtn} onClick={uploadFile}>Upload</button>
                    </div>
                    <p className={enroll.filecndtn}>Upload file should be less than 30kb</p>
                    <div className={enroll.kyc}><h4 className={enroll.starlabel}>KYC</h4></div><br />
                    <div >

                        <div className={enroll.inputfield}>

                            <div className={enroll.custom_select}>
                                <select>
                                    <option value="S">Select</option>
                                    <option value="PC">PAN CARD</option>
                                    <option value="AC">AADHAR CARD</option>
                                    <option value="VI">VOTER ID</option>
                                    <option value="DL">DRIVING LICENCE</option>
                                </select>

                            </div>
                        </div>

                        <div className={enroll.inputfield}>
                            <input type="file" className={enroll.input} id="files" onInput = {handleChange} onChange={handleChange} required />
                            <button className={enroll.upbtn} onClick={uploadFile}>Upload</button>
                        </div>
                    </div>

                    <div className={enroll.edu}>

                        <h2>Educational Details</h2>
                        <div className={enroll.inputfield}>
                            <label className={enroll.starlabel} >SSC</label>
                            <input type="file" className={enroll.input} onInput = {handleChange} onChange={handleChange} required />
                            <button className={enroll.upbtn} onClick={uploadFile}>Upload</button>
                        </div>
                        <div className={enroll.inputfield}>
                            <label className={enroll.starlabel}>HSC</label>
                            <input type="file" className={enroll.input} onInput = {handleChange} onChange={handleChange} required />
                            <button className={enroll.upbtn} onClick={uploadFile}>Upload</button>
                        </div>
                        <div className={enroll.inputfield}>
                            <label className={enroll.starlabel}>UG</label>
                            <input type="file" className={enroll.input} onInput = {handleChange} onChange={handleChange} required />
                            <button className={enroll.upbtn} onClick={uploadFile}>Upload</button>
                        </div>
                        <div className={enroll.inputfield}>
                            <label>PG</label>
                            <input type="file" className={enroll.input} onInput = {handleChange} onChange={handleChange} />
                            <button className={enroll.upbtn} onClick={uploadFile}>Upload</button>
                        </div>
                        <div className={enroll.inputfield}>
                            <label>Other</label>
                            <input type="file" className={enroll.input} onInput = {handleChange} onChange={handleChange} />
                            <button className={enroll.upbtn} onClick={uploadFile}>Upload</button>
                        </div>
                    </div>
                    <div className={enroll.inputfield}>
                        <input type="submit" onClick={addScreen} value="Continue for payment" className={enroll.paybtn} />
                    </div>
                </div>
            </div>

        </div>

        </React.Fragment>
    )
}


export default Enroll