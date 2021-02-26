import React, { Component } from 'react';

class EducationLeft extends Component {
    render() {
        return (
          <div className="col-left">
            <div
              className="flat-spacer"
              data-desktop={97}
              data-mobile={0}
              data-smobile={0}
            />
            <div
              className="featured-post position-relative animate-element wow delay5 fadeInUp"
              data-wow-delay="0.5s"
            >
              <img src="images/section/11.png" alt="images" />
              <div
                className="flat-spacer"
                data-desktop={0}
                data-mobile={0}
                data-smobile={30}
              />
              <div className="">
                <a href="https://github.com/sarauras1" className="color-s1">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sara-uras-11619a166/"
                  className="color-s2"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        );
    }
}

export default EducationLeft;
