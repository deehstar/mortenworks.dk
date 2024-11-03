import React from 'react'
import './about.css'
const About = () => {
  return (
    <section id="about">
        <div className="aboutContent">
            <p className="aboutText">
                i am a software engineering student at the university of southern denmark. i am <span className='aboutHighlight'>passionate</span> about technology and love to create things. 
                i have experience with web development, mobile development, cloud computing and devops. 
                i am currently looking for <span className='aboutHighlight'>internship</span> in software development.
                i live in odense, denmark with my wife and two daughters. im a huge <span className='aboutHighlight'>nerd </span> 
                and love to watch movies, play video games, read books and throwing the frisbee around on the local <span className='aboutHighlight'>discgolf</span> course. 
                i am a big supporter of a <span className='aboutHighlight'>culture first</span> approach and believe that a good culture is the key to a successful company.
                So if you are looking for a passionate software engineering student with a focus on culture and a love for technology, then i am your guy.
            </p>
        </div>
    </section>
  )
}

export default About