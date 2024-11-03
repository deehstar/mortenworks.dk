import React from 'react';
import './intro.css';
import cartoon from '../../assets/cartoon.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="introContent_hey">hey there,</span>
            <span className="introContent_iam">i'm <span className="introContent_name">morten</span> <br /> software engineering student</span>
            <p className="introContent_text">passionate about technology and loves to create things. i am always looking for new challenges and opportunities to learn and grow.</p>
        </div>
        <img src={cartoon} alt="cartoon" className="cartoon"/>
    </section>
  )
}

export default Intro