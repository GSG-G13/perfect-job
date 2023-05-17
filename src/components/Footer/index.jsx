import { Component } from 'react'
import './style.css'

class Footer extends Component {
    render() {
        return (

            <footer className="universal_footer expanded_footer footer_accordion">

                <nav className="primary_footer_nav">
                    <button className="footer-accordion-trigger accordion-toggle"></button>
                    <div className="accordion-content">
                        <a href="#" className="chair_logo"><img src="https://www.ziprecruiter.com/zrs/starterview/ed91b887/img/ziprecruiter-chair-R.svg" alt="ZipRecruiter homepage" title="ZipRecruiter homepage" /></a>
                        <div className="nav_group job_seekers_group">
                            <h3 className="group_header">Job Seekers</h3>
                            <ul>
                                <li className="item"><a href="#">Search Jobs</a></li>
                                <li className="item"><a href="#">Browse Jobs</a></li>
                                <li className="item"><a href="#">Search Salaries</a></li>
                                <li className="item"><a href="#">Who is Phil?</a></li>

                                <li className="item"><a href="#">Job Seeker Reviews</a></li>


                                <li className="item"><a href="#">Mobile Apps</a></li>

                                <li className="item"><a href="#">Create Free Account</a></li>

                                <li className="item"><a href="#" className="js_launch_solvvy" target="_blank" rel="noopener noreferrer">Job Seeker Support</a></li>

                                <li className="item"><a href="#">Trust and Safety</a></li>
                            </ul>
                        </div>

                        <div className="nav_group">
                            <h3 className="group_header long_header">Small &amp; Medium Businesses</h3>
                            <ul>
                                <li className="item"><a href="#">Post a Job</a></li>

                                <li className="item"><a href="#">How it Works</a></li>


                                <li className="item"><a href="#">Job Sites</a></li>


                                <li className="item"><a href="#">ZipRecruiter Reviews</a></li>


                                <li className="item"><a href="#">Plans</a></li>


                                <li className="item"><a href="#">Search Resumes</a></li>

                                <li className="item"><a href="#">New Account Help</a></li>
                                <li className="item"><a href="#">Employer Support</a></li>
                            </ul>
                        </div>

                        <div className="nav_group">
                            <h3 className="group_header long_header">Enterprise Businesses</h3>
                            <ul>
                                <li className="item"><a href="#">Enterprise Overview</a></li>
                                <li className="item"><a href="#">How it Works</a></li>
                                <li className="item"><a href="#">Customer Stories</a></li>
                                <li className="item"><a href="#">FAQs</a></li>
                                <li className="item"><a href="#">Request a Consultation</a></li>
                            </ul>
                        </div>
                        <div className="nav_group">
                            <h3 className="group_header">Partner with Us</h3>
                            <ul>
                                <li className="item"><a href="#">Partner Overview</a></li>
                                <li className="item"><a href="#">Job Board API</a></li>
                                <li className="item"><a href="#">Email Alert Program</a></li>
                                <li className="item"><a href="#">Reseller Program</a></li>
                                <li className="item"><a href="#">Job Board Software</a></li>
                                <li className="item"><a href="#">ATS Integrations</a></li>
                            </ul>
                        </div>
                        <div className="nav_group company_group">
                            <h3 className="group_header">Company</h3>
                            <ul>
                                <li className="item"><a href="#">About Us</a></li>

                                <li className="item"><a href="#">Careers</a></li>

                                <li className="item"><a href="#">Investors</a></li>

                                <li className="item"><a href="#">Blog</a></li>

                                <li className="item"><a href="#">Press</a></li>
                                <li className="item"><a href="#">Engineering</a></li>
                                <li className="item"><a href="#">ZipRecruiter.org</a></li>
                                <li className="item"><a href="#">ZipRecruiter UK</a></li>
                            </ul>
                            <div className="social_group">
                                <ul>
                                    <li className="social-item">
                                        <a href="#" title="Follow ZipRecruiter on Facebook" className="facebook">Facebook</a>
                                        <a href="#" title="Follow ZipRecruiter on Twitter" className="twitter">Twitter</a>
                                        <a href="#" title="Follow ZipRecruiter on LinkedIn" className="linkedin">LinkedIn</a>
                                        <a href="#" title="Follow ZipRecruiter on Instagram" className="instagram">Instagram</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav className="secondary_footer_nav">
                    <div className="ccpa_legal">
                        Your privacy is our priority. Learn more:
                        <a href="/ccpa-opt-out">Your Privacy Choices</a>
                    </div>

                    <ul>
                        <li className="item">
                            <a href="#" title="COVID-19 resources for job seekers">COVID-19 Resources</a>
                        </li>
                        <li className="item">
                            <a href="#" target="_blank">Privacy<span className="fullText"> Policy</span></a>
                        </li>
                        <li className="item">
                            <a href="#" target="_blank">Ca<span className="fullText">lifornia</span> Privacy<span className="fullText"> Notice</span></a>
                        </li>
                        <li className="item">
                            <a href="#">Terms<span className="fullText"> of Use</span></a>
                        </li>
                        <li className="item">
                            <a href="#" target="_blank" rel="nofollow">Cookie Policy</a>
                        </li>
                        <li className="item">
                            <a href="#"><span className="fullText">Job</span> Posting Rules</a>
                        </li>
                        <li className="item">
                            <a href="#">Attribution<span className="fullText"> Notices</span></a>
                        </li>
                        <li className="item">
                            <a href="#">Corp<span className="fullText">orate</span> Responsibility</a>
                        </li>
                    </ul>
                </nav>
                <span className="legal">ZipRecruiter, Inc. © 2023 All Rights Reserved Worldwide</span>
            </footer>
        );
    }
}
export default Footer;