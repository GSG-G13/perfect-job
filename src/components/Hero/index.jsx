import { Component } from 'react'
import './style.css'

 class Hero extends Component {
  render() {
    return (
      <div className='hero-container'>
        <div className="main_site_header">
          <header className="site_header" role="banner">
            <div className="content">
              <div className="logo">
                <a className="brand" href="#">
                  <img className="zr_logo" src="https://www.ziprecruiter.com/zrs/starterview/f810ae13/img/logos/ziprecruiter-blacktext.svg" alt="ZipRecruiter" />
                </a>
              </div>
              <nav className="primary_nav" aria-label="content">
                <section className="nav jobseekers_nav has_subnav force_open_nav">
                  <button className="headline_nav dropdown_button nav_title" aria-haspopup="true" aria-expanded="false"> Job Seekers</button>
                </section>
                <section className="nav smb_nav has_subnav force_open_nav">
                  <button className="headline_nav dropdown_button" aria-haspopup="true" aria-expanded="false">
                    <span className="nav_title text_large">
                    About
                    </span>
                  </button>
                </section>
                <section className="nav enterprise_nav has_subnav force_open_nav">
                  <button className="headline_nav dropdown_button" aria-haspopup="true" aria-expanded="false">
                    <span className="nav_title text_large">Contact</span>
                  </button>
                </section>
              </nav>
              <nav className="secondary_nav" aria-label="user">
                <section className="nav post_a_job_nav">
                  <span className="headline_nav nav_title">
                    <a href="#" className="post_button_desktop" title="Post jobs to multiple job boards">Post a Job</a>
                  </span>
                </section>
                <section className="nav sign_in_nav">
                  <span className="headline_nav nav_title">
                    <a href="#" className="sign_in_link" rel="nofollow">Sign In</a>
                  </span>
                </section>
              </nav>
            </div>
          </header>
        </div>
      </div>
    )
  }
}


export default Hero;