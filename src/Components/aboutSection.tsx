import React from 'react';
import { PERSONAL_INFO } from '../Constants';


const AboutComponent: React.FC = () => {
  return (
    <section id='about'>
      <h1 className='about-heading1'>About Me</h1>
      <div className='about'>
        <div>
          {PERSONAL_INFO.map((item) => (
            <li key={item.id} className='about-subheading'>
              <strong>{item.title}:</strong>
              <span>{item.titleInfo}</span>
            </li>
          ))}
        </div>

        <div>
          <h2 style={{ color: 'white' }}>Hello There !</h2>
          <p className='heading-right'>
            My name is Arshdeep Singh, I am a Full Stack Web Developer. An Open Source enthusiast
            and self-learned developer from India.
          </p>
          <p className='heading-right-1'>
            I love working on new and exciting technologies emerging nowadays. I have good work
            experience as a MERN Stack Developer in startup(s) and have a Knowledge about MERN stack
            technologies.
          </p>
          <a
            href={`${process.env.PUBLIC_URL}` + '/ArshdeepSinghResume.pdf'}
            target='_blank'
            rel='noreferrer'
            download={`${process.env.PUBLIC_URL}` + '/ArshdeepSinghResume.pdf'}
          >
            <button className='cv'>DOWNLOAD CV</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
