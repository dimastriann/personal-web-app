// src/pages/About.tsx
import React from 'react';
import Skills from '../components/Skill';

import appData from "../data/my_data.json";

const Portfolio: React.FC = () => {

  const { educations, work_experiences } = appData.profile;
  return (
    <section id="portfolio" className="portfolio section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p></p>
      </div>

      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          {/* <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul> */}

          <div className="row gy-4">
            <div className="col-md-6">
            <h4>Work Experience</h4>
              {work_experiences.map((work) => 
                (
                  <div className="mb-4">
                    <div className="mb-2">{work.from} - {work.to} <span><strong>{work.role}</strong></span></div>
                    <h5>{work.company_name}</h5>
                    <div>{work.address}</div>
                  </div>
                )
              )}
            </div>

            <div className="col-md-6">
              <h4>Educations</h4>
              <div className="about-me">
                {educations.map((education) => 
                  (
                    <div className="mb-4">
                      <div className="mb-2">
                        {education.from} - {education.to} 
                        <span className="mx-2"><strong>{education.major}</strong></span>
                        <span>({education.level})</span>
                      </div>
                      <h5>{education.university_name}</h5>
                      <div>{education.address}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
};

export default Portfolio;
