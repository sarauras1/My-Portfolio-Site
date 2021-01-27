import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
          <div
            className="section slide-personal-Intro-sixth slide-dark"
            id="contact"
          >
            <footer id="footer" className="footer footer-s1 footer-s1-home1">
              <div
                id="footer-widget"
                className="footer-widget-s1 footer-widget-line bg-s1 position-relative"
              >
                <div className="container">
                  <div className="row d-lg-flex align-items-center text-center">
                    <div className="col-lg-12">
                      <h3 className="widget-title larger lt-sp06">
                        Stay Connected
                      </h3>
                    </div>
                    <div className="col-lg-12">
                      <div className="widget-info">
                        <p className="address">London, UK</p>
                        <p className="mail">saraxurax@rocketmail.com</p>
                        <p className="phone">+44 741 3140 617</p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="site-list site-list-pdl text-center">
                        <a
                          href="https://www.linkedin.com/in/sara-uras-11619a166/"
                          className="bg-s1"
                        >
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                        <a
                          href="https://github.com/sarauras1"
                          className="bg-s2"
                        >
                          <i  className="fa fa-github" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="bottom" className="bottom-s1">
                <div className="container d-lg-flex justify-content-between">
                  <div className="copyright lt-sp02">
                    © Sara Design, 2020 All rights reserved.
                  </div>
                  <div className="socials-list color-s1">
                    <a  href="https://github.com/sarauras1">
                      <i className="fa fa-github" aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/sara-uras-11619a166/">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );
    }
}

export default Footer;
