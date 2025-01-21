import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';
import PropTypes from 'prop-types';

const SideBar = ({loopMessage}) => {
  const messages = [
    'WEB DEVELOPER',
    'MACHINE LEARNING ENGINEER',
    'MOBILE APP DEVELOPER',
    'FRONT-END ENGINEER',
  ];
  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      if (delay) {
        const id = setInterval(() => {
          savedCallback.current();
        }, delay);
        return () => clearInterval(id);
      }
      return () => {}; // pass linter
    }, [delay]);
  };
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS
  const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
  const [idx, updateIter] = useState(0); // points to the current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(0); // points to the current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed


  useInterval(() => {
    let newIdx = idx;
    let newChar = char;

    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }

    if (newIdx === messages.length) {
      if (loopMessage) {
        updateIter(0);
        updateChar(0);
      } else {
        setIsActive(false);
      }
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me5.jpeg`} alt="" />
        </Link>
        <header>
          <h2>Sudarshan Kumar</h2>
          <p>{message}</p>
          <p><a href="mailto:sudarshansuccess@gmail.com">sudarshansuccess@gmail.com</a></p>
          <p>Phone Number: 746-199-5193</p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>I am a Founding Engineer at <a href="https://natoe.ai">Natoe.ai</a>, where I lead the front-end development,
          handling everything from writing code to deployment. Previously, I worked as the solo Frontend Engineer at <a
              href="https://fooddarzee.com">Food Darzee</a>, owning the entire front-end lifecycle and ensuring seamless
          delivery of user-focused features.

          With expertise in cutting-edge frameworks like Angular, React, and Next.js, I have a strong track record of
          building and deploying scalable, high-performance web applications. My experience spans web and app
          development, including core module implementation, group-up planning, and end-to-end execution. I am also
          skilled in Web Design and Machine Learning, blending technical precision with creative problem-solving.

          Beyond coding, I excel at collaborating with teams, communicating effectively, and ensuring that every project
          I work on achieves its full potential. Thank you 💜</p>

        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> :
                <Link to="/about" className="button">About Me</Link>}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons/>
        {/* <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p> */}
      </section>
    </section>
  );
};
SideBar.defaultProps = {
  loopMessage: false,
};

SideBar.propTypes = {
  loopMessage: PropTypes.bool,
};
export default SideBar;
