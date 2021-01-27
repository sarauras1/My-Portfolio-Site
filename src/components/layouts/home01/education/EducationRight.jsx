import React, { Component } from "react";
import { Link } from "react-router-dom";

class EducationRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: [
        {
          id: 1,
          timeline: "timeline-inverted color1",
          info: "FreeCodeCamp",
          title: "Web Design",
          text:
            "	Responsive Web Design Certificate – freeCodeCamp.org (Covers html and CSS)",
        },
        {
          id: 2,
          timeline: "timeline-inverted color2",
          info: "Codecademy",
          title: "Build a Website from scratch",
          text:
            "Certificate HTML, CSS, Bootstrap, Github, Git Bash command line in which I learned how to build a website from scratch and deploy websites with Git Bash command line- Codecademy",
        },
        {
          id: 3,
          timeline: "timeline-inverted color1",
          info: "Udemy",
          title: "The Complete Web development Bootcamp",
          text:
            "Ability to build an application from scratch with React and to use npm node, API, DataBase: SQL, MONGODB deploy app in surge.sh and GitHub",
        },
        {
          id: 4,
          timeline: "timeline-inverted color3",
          info: "Esol",
          title: "Ehglish Qualification",
          text: "English – Level 2 (GCSE Equivalent). with City & Guilds",
        },
        {
          id: 5,
          timeline: "timeline-inverted color1",
          info: "IAL Sardegna",
          title: "General Diploma",
          text:
            "Level 3, (GCSE Equivalent) covering: English, Math, Science, Psychology, Customer Service, Products Quality, and ITC....",
        }
  
      ],
    };
  }
  render() {
    return (
      <div className="col-right">
        <div
          className="flat-spacer"
          data-desktop={0}
          data-mobile={70}
          data-smobile={70}
        />
        <div className="flat-title t1 animate-element wow delay5 fadeInDown">
          <h4 className="sub-title mg-b13">Educational qualification</h4>
          <h2 className="title-section color-d12">My Education</h2>
        </div>
        <div
          className="timelines position-relative animate-element wow delay5 fadeInUp"
          data-wow-delay="0.5s"
        >
          <ul className="timeline">
            {this.state.skill.map((data) => (
              <li className={data.timeline} key={data.id}>
                <div className="timeline-badge" />
                <div className="timeline-panel">
                  <h3 className="f-info">{data.info}</h3>
                  <div className="s-info">{data.title}</div>
                  <p>{data.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="fl-btn btn-general btn-hv-border">
            <a
            href='images/section/SaraUrasCV.docx' download 
              className="f-w500 lt-sp1 border-corner2 text-one"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationRight;
