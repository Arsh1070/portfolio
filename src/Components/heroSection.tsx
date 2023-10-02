import React from 'react';
import { Image } from 'antd';
import myPic from '../assets/arshPic(1).jpg';
import { SOCIAL_ICONS } from '../Constants';

const HeroComponent: React.FC = () => {
  return (
    <section className='section-1' id='home'>
      <div className='section-1-left'>
        <strong className='res'>HELLO!</strong>
        <strong>
          I&#39;m <span>Arshdeep Singh</span>
        </strong>
        <strong>A Full Stack Web Developer</strong>
        <div className='section-1-left-icons'>
          {SOCIAL_ICONS.map((socialItem) => (
            <a
              key={socialItem.socialId}
              href={socialItem.linkUrl}
              target='_blank'
              rel='noreferrer'
              className='social-icons'
            >
              <i className={socialItem.socialIcon}></i>
            </a>
          ))}
        </div>
      </div>
      <div>
        <Image src={myPic} alt='pic' preview={false} />
      </div>
    </section>
  );
};

export default HeroComponent;
