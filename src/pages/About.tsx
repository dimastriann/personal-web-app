// src/pages/About.tsx
import React from 'react';

import Skills from '../components/Skill';
import appData from "../data/my_data.json";


const About: React.FC = () => {

  const { skills, profile } = appData;
  const firstWork: number = parseInt(profile.first_yow, 10);
  const yearOfExperience: number = new Date().getFullYear() - firstWork

  return (
    <section id="about" className="about section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">
          <div className="col-md-6">

            <div className="row justify-content-between gy-4">
              <div className="col-lg-5">
                <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-7 about-info">
                <p><strong>Name: </strong> <span>{profile.full_name}</span></p>
                <p><strong>Role: </strong> <span>{profile.role}</span></p>
                <p><strong>Current Role: </strong> <span>{profile.current_role}</span></p>
                <p><strong>Current Level: </strong> <span>{profile.current_level}</span></p>
                <p title="Year of Experience"><strong>YoE: </strong> <span>{yearOfExperience}+ Years Experience</span></p>
              </div>
            </div>

            <div className="skills-content skills-animation">

              <h5>Technical Skills</h5>
              {skills.technical_skill.map((skill) =>
                <Skills id={skill.id} label={skill.label} level={skill.level} key={skill.id}/>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="about-me">
              <h4>About me</h4>
              {profile.about_me.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>
        </div>
        <div className="row gy-4 mt-2">
          <div className="col-md-6">
            <div className="skills-content skills-animation">
              <h5>Frameworks</h5>
              {skills.technical_framework.map((skill) =>
                <Skills id={skill.id} label={skill.label} level={skill.level} key={skill.id}/>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="skills-content skills-animation">
              <h5>Languages</h5>
              {skills.languages.map((skill) =>
                <Skills id={skill.id} label={skill.label} level={skill.level} level_label={skill.level_label} key={skill.id}/>
              )}
            </div>
          </div>
        </div>
        <div className="row gy-4 mt-2">
          <div className="col-md-6">
            <div className="skills-content skills-animation">
              <h5>Soft Skills</h5>
              {skills.soft_skill.map((skill) =>
                <Skills id={skill.id} label={skill.label} level={skill.level} key={skill.id}/>
              )}
            </div>
          </div>
        </div>

      </div>

    </section>
  )
};

export default About;
