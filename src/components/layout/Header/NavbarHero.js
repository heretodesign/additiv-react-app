import React, { Component } from 'react';
import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import logo from '../../../img/logo.png'


const NavbarHero = () => {

  return (
    <>
      <section className="hero is-primary is-medium imgLanding">
        <div className="is-paddingless-horizontal topNav">
            <div className="container grid">
                <div className="firstsection">
                    <p className="subtitle is-6 has-text-grey isdata">additiv DFS now available as-a-Service</p>
                 </div>
            </div>
        </div>
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
              <a className="navbar-item" href="https://www.additiv.com/">
                <span className="company has-text-black" id="companyName">additiv</span>
              </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item">
                    <strong className="is-uppercase" id="navItems">wealth</strong>
                  </a>
                  <a className="navbar-item">
                    <strong className="is-uppercase" id="navItems">credit</strong>
                  </a>
                  <a className="navbar-item">
                    <strong className="is-uppercase" id="navItems">consulting</strong>
                  </a>
                  <a className="navbar-item">
                    <strong className="is-uppercase" id="navItems">technology</strong>
                  </a>
                  <a className="navbar-item">
                    <strong className="is-uppercase" id="navItems">about</strong>
                  </a>
                  <span className="navbar-item">
                  <a className="button is-link is-rounded has-text-white" id="navItems">
                    <strong>CONTACT US</strong>
                  </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
          <div className="firstsection">
              <div className="content">
                <div className="columns">
                  <div className="column is-half">
                    <h1 className="title has-text-left has-text-weight-light" id="mainBlack">Introducing the future of Wealth Management
                    </h1>
                  </div>
                  <div className="column"></div>
                </div>
                <div className="columns">
                  <div className="column is-two-fifths">
                    <p className="has-text-left has-text-black"> additiv introduces the future of Wealth Management with the launch of its
                    Digital-Finance-as-a-Service (DFaaS) offering. The new offering is based on the fourth generation of its
                    award winning Digital Finance Suite (DFS 4.0) on a dedicated cloud platform for the financial services industry.
                     </p>
                  </div>
                  <div className="column"></div>
                </div>
              </div>
              <div className="content" id="landingForm">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <a className="button is-large is-info has-test-small is-rounded is-fullwidth" id="landBtn">FIND OUT MORE</a>
                  </div>
                  <div className="column"></div>
                </div>

              </div>

           </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavbarHero;
