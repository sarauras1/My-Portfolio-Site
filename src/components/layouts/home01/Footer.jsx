import React, { Component } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      message: "",
    };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": "contact",
        ...this.state,
      }),
    })
      .then(() =>
        alert(
          "Success! Thank you for your message! We will contact you as soon has possible time to confirm"
        )
      )
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    const { name, surname, email, message } = this.state;

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
                    <div id="contact">
                      <div className="container">
                        <form method="post" onSubmit={this.handleSubmit}>
                          <input type="hidden" name="contact" value="contact" />
                          <div class="form-row">
                            <div class="col-sm-12">
                              <input
                                id="name"
                                type="text"
                                class="form-control-sm"
                                placeholder="First name"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                            <div class="col-sm-12">
                              <input
                                id="surname"
                                type="text"
                                name="surname"
                                class="form-control-sm"
                                value={surname}
                                onChange={this.handleChange}
                                required
                                placeholder="Last name"
                              />
                            </div>
                          </div>

                          <div class="form-row">
                            <div class="col-sm-12">
                              <input
                                placeholder="Your Email"
                                type="email"
                                required
                                id="email"
                                name="email"
                                class="form-control-sm"
                                value={email}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div class="col-sm-12">
                              <textarea
                                placeholder="Message"
                                className="message"
                                required
                                id="message"
                                type="message"
                                name="message"
                                value={message}
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <button
                            id="submit"
                             className="btn btn-primary button float-right"
                            type="submit"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
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
                    <a href="https://github.com/sarauras1" className="bg-s2">
                      <i className="fa fa-github" aria-hidden="true" />
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
                <a href="https://github.com/sarauras1">
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
