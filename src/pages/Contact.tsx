// src/pages/Contact.tsx
import React from 'react';

import appData from "../data/my_data.json";

const Contact: React.FC = () => {
  const {contacts, profile} = appData;
  return (
    <section id="contact" className="contact section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p></p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-5">

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>{profile.address}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <a href={"tel:" + contacts.phone.value} className="text-decoration-none">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                </a>
                <div>
                  <h3>{contacts.phone.label}</h3>
                  <p>{contacts.phone.value}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <a href={"mailto:" + contacts.email.value} className="text-decoration-none">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                </a>
                <div>
                <h3>{contacts.email.label}</h3>
                <p>{contacts.email.value}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="300">
          <div className="row gy-4">

            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required={true}/>
            </div>

            <div className="col-md-6 ">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required={true}/>
            </div>

            <div className="col-md-12">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required={true}/>
            </div>

            <div className="col-md-12">
              <textarea className="form-control" name="message" rows={6} placeholder="Message" required={true}></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>

              <button type="submit">Send Message</button>
            </div>

          </div>
        </form>

      </div>

    </section>
  );
};

export default Contact;
