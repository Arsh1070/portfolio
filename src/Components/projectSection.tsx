import React from 'react';
import { Card, Image } from 'antd';
import { PROJECTS } from '../Constants';

const ProjectComponent: React.FC = () => {
  return (
    <section id='projects'>
      <h1 className='about-heading'>My Projects</h1>
      <div className='projects'>
        {PROJECTS.map((projectItem) => (
          <Card
            key={projectItem.id}
            cover={
              <Image
                alt='example'
                src={projectItem.imgUrl}
                className='projects-card-img'
                preview={false}
              />
            }
            className='projects-card'
          >
            <div className='projects-card-content'>
              <h1 className='appName'>{projectItem.title}</h1>

              <p className='appInfo'>{projectItem.description}</p>
              <p className='appTech'>
                {projectItem.techNames.map((tech, index) => (
                  <span key={`tech_${index + 1}`} className='tech'>
                    {tech}
                  </span>
                ))}
              </p>
              <p className='appIcon'>
                {projectItem.projectLinks.map((linkItem) => (
                  <a
                    key={linkItem.linkId}
                    href={linkItem.linkUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='social-icons'
                  >
                    <i className={linkItem.linkIcon}></i>
                  </a>
                ))}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectComponent;
