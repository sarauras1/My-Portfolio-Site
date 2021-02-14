import React, { Component } from 'react';
import Helpers from './helpers';
class Banner extends Component {
  state = {
    loading: false, // to keep track of when form submitted
    errors: null, // for displaying errors
    file: "", // the file type the user chooses to download
  };
  handleChange = (event) => {
    this.setState({
      // substring to is to limit to 3 characters
      file: event.currentTarget.value.substring(0, 3),
    });
  };
  handleSubmit = (event) => {
    this.setState(
      {
        errors: null,
        loading: true,
      },
      () => {
        Helpers.httpRequest(
          `images/section/CV.pdf?file=${this.state.file}`,
          "get"
        )
          .then((response) => {
            this.setState({
              loading: false,
            });
          })
          .catch((error) => {
            error.json().then((json) => {
              this.setState({
                errors: json,
                loading: false,
              });
            });
          });
      }
    );

    event.preventDefault();
  };
  render() {
    return (
      <div className="section slide-personal-Intro-first">
        <section className="banner-section s1" id="home">
          <div className="container">
            <div className="content-text position-relative">
              <div
                className="animate-element wow delay5 fadeInDown"
                data-wow-delay="0.3s"
              >
                <h1 className="cd-headline clip is-full-width title mg-b29 text-white">
                  <span>Create </span>
                  <span className="cd-words-wrapper color-d4">
                    <b className="is-visible">Design!</b>
                    <b>Template!</b>
                  </span>
                </h1>
                <p className="lt-sp03 mg-b60 text-white">
                  Hi, Do you need a Website for your business within 2 weeks? No
                  problem!
                  <br /> I will do that for you
                </p>
              </div>
              <div
                className="animate-element wow delay5 fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="fl-btn btn-general btn-hv-border">
                  <div className="border-corner5 f-w500 lt-sp095 text-white ">
                    <form onSubmit={this.handleSubmit}>
                      <a
                        href="images/section/CV.pdf"
                        className="f-w500 lt-sp1 border-corner2 text-one"
                        Download
                      >
                        Download Resume
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Banner;

