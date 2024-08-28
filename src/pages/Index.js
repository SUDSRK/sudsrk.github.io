import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Sudarshan's Portfolio"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">MY PortFolio</Link></h2>
          <p>
            A Glance at my Career so far.
          </p>
        </div>
      </header>
      <h5>Hey! I&apos;M Sudarshan</h5>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">my personal statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      {/* <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
