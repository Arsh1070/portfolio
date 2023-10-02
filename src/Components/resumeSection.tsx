import React from 'react';
import { Card } from 'antd';
import { EDUCATION, RESUME } from '../Constants';

const ResumeComponent: React.FC = () => {
  return (
    <section id='resume'>
      <h1 className='about-heading'>My Resume</h1>
      <div className='resume'>
        <h3>WORK EXPERIENCE</h3>

        {RESUME.map((resumeItem) => (
          <Card key={resumeItem.id} className='card'>
            <div className='title'>
              <h1 className='title-1'>{resumeItem.timePeriod}</h1>
              <h3 className='title-2'>{resumeItem.designation}</h3>
              <h6 className='title-3'>
                {resumeItem.companyName} | {resumeItem.jobLocation}
              </h6>
            </div>
            <ul className='content'>
              {resumeItem.description.map((descItem) => {
                return (
                  <li key={descItem.descId} className='content-1'>
                    <span className='dot'></span>
                    {descItem.descriptionInfo}
                  </li>
                );
              })}
            </ul>
          </Card>
        ))}
        <h3 className='education'>EDUCATION</h3>

        {EDUCATION.map((educationItem) => (
          <Card key={educationItem.id} className='card'>
            <div className='title'>
              <h1 className='title-1'>{educationItem.timePeriod}</h1>
              <h3 className='title-2'>{educationItem.CertificationName}</h3>
              <h6 className='title-3'>
                {educationItem.institutionName} | {educationItem.instituteLocation}
              </h6>
            </div>

            <ul className='content'>
              {educationItem.description.map((descItem) => {
                return (
                  <li key={descItem.descId} className='content-1'>
                    <span className='dot'></span>
                    {descItem.descriptionInfo}
                  </li>
                );
              })}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ResumeComponent;
