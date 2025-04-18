// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container-fluid">
        <div className="row gy-4 mt-2" style={{margin: "auto"}}>
          <div className="col-md-6 hero-name p-4 px-5">
            <div>Hi There</div>
            <h3>I am</h3>
            <h3>Dimas Trian Nugraha</h3>
            <h3>Software Engineer</h3>
            <p><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
          </div>
          <div className="col-md-6 text-center">
            <img src="/img/my-logo.png" alt="" data-aos="fade-in" style={{ width: "70%" }} />
          </div>
        </div>

      </div>
    </section>
  )
};

export default Home;
