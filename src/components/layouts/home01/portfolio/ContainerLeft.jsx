import React, { Component } from 'react';
//import {Link} from 'react-router-dom'

class ContainerLeft extends Component {
    render() {
        return (
          <div
            className="col-left animate-element wow delay5 fadeInDown"
            data-wow-delay="0.5s"
          >
            <div className="flat-title t1">
              <h4 className="sub-title mb-2">
                I am a Web UX Designer and UI Developer.
              </h4>
              <h2 className="title-section color-d12 mg-b34">
                Do You Need a website for your businees, blog website, or portfolio website?
              </h2>
              <div className="description">
                <p className="lt-sp01">
                  I am a passionate web developer with 2 years of
                  experience.
                </p>
                <p className="lt-sp01">
                  I can create for your business bespoke affordable beautiful
                  websites.
                </p>
              </div>
              {/* <div className="fl-btn btn-general btn-hv-border">
                <Link
                  to="#"
                  className="f-w500 text-one color-1 lt-sp1 border-corner2"
                >
                  View My Projects websites
                </Link>
              </div> */}
            </div>
          </div>
        );
    }
}

export default ContainerLeft;
