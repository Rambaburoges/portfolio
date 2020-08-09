import React, { Component } from "react";
import sassLogo from "../images/logo/sass_logo.svg";
import reactLogo from "../images/logo/react_logo.png";
import css3 from "../images/logo/css3.png";
import html5 from "../images/logo/html5.png";
import javascript from "../images/logo/javascript.png";
import mysql from "../images/logo/mysql.png";
import { AllSkills, SkillSection } from "../styles/skill";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        { id: 1, title: "Html5", url: html5 },
        { id: 2, title: "Css3", url: css3 },
        { id: 3, title: "Javascript", url: javascript },
        { id: 4, title: "React", url: reactLogo },
        { id: 5, title: "SASS", url: sassLogo },
        { id: 6, title: "Mysql", url: mysql },
      ],
    };
  }

  render() {
    const { skills } = this.state;
    const { type } = this.props;
    return (
      <SkillSection id={type} key="skill_section">
        <div>
          <h3 className="title">What I know</h3>
        </div>
        <AllSkills className="grid-container">
          {skills.map((skill) => {
            return (
              <img
                className="skillLogo"
                alt={skill.title}
                key={skill.id}
                id={skill.id}
                src={skill.url}
              />
            );
          })}
        </AllSkills>
      </SkillSection>
    );
  }
}

export default Skills;
