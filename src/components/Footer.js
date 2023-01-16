import React from 'react'
import foot from './footer.module.css';
import logo from '../images/sibney.jpg'

function Footer() {
    return (
        <React.Fragment>

            <footer className={foot.footer}>
                <div className={foot.footer__addr}>
                    <a ><img src={logo} className={foot.footer__logo}></img></a>

                    <h2>Contact</h2>

                    <address>
                    649, 13th Cross, 27th Main Rd, 1st Sector,<br/> HSR Layout, Bengaluru, Karnataka 560102<br/>

                        <a className={foot.footer__btn} href="mailto:example@gmail.com">Email Us</a>
                    </address>
                </div>

                <ul className={foot.footer__nav}>
                    <li className={foot.nav__item}>
                        <h2 className={foot.nav__title}>Links</h2>

                        <ul className={foot.nav__ul}>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            
                            <li>
                                <a href="enroll">Join Now</a>
                            </li>

                            <li>
                                <a href="enroll">Learn More</a>
                            </li>

                            <li>
                                <a href="signup">Manage Account</a>
                            </li>
                        </ul>
                    </li>

                    <li className={foot.nav__item}>
                        <h2 className={foot.nav__title}>News & Info</h2>

                        <ul className={foot.nav__ul}>
                            <li>
                                <a href="http://p2fsemi.com/news-event.php">Press Releases</a>
                            </li>

                            <li>
                                <a href="http://p2fsemi.com/services.php">About Our Products</a>
                            </li>

                            <li>
                                <a href="http://p2fsemi.com/services.php">Product Support</a>
                            </li>

                            <li>
                                <a href="http://p2fsemi.com/Knowledge_Center.php">Product Manuals</a>
                            </li>

                            <li>
                                <a href="#http://p2fsemi.com/Knowledge_Center.php">Product Registration</a>
                            </li>

                            <li>
                                <a href="http://p2fsemi.com/Knowledge_Center.php">Newsletter Sign Up</a>
                            </li>
                        </ul>
                    </li>

                    <li className={foot.nav__item}>
                        <h2 className={foot.nav__title}>Support</h2>

                        <ul className={foot.nav__ul}>
                            <li>
                                <a href="http://p2fsemi.com/about-us.php#contact">FAQ</a>
                            </li>

                            <li>
                                <a href="http://p2fsemi.com/about-us.php#contact">Help Desk</a>
                            </li>

                            <li>
                                <a href="http://p2fsemi.com/Knowledge_Center.php">Forums</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className={foot.legal}>
                    <p>&copy; 2022 Copyright.</p>

                </div>
            </footer>

        </React.Fragment>
    )
}

export default Footer

