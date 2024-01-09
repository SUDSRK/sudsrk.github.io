import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Me via email @ sudarshansuccess@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact Me</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>In case you have a job for me. Or a Freelancing Oppurtunity. You can click here: </p>
        <EmailLink />
      </div>
      <div className="email-at">
      <p>Or we can connect here:</p>
      <ContactIcons />
      </div>
    </article>
  </Main>
);

export default Contact;
