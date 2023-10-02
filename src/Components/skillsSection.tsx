import React from 'react';
import { Progress } from 'antd';
import { SKILLS } from '../Constants';

const SkillsComponent: React.FC = () => {
  return (
    <section id='skills'>
      <h1 className='about-heading'>My Skills</h1>
      <div className='skills'>
        {SKILLS.map((item) => (
          <div key={item.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>{item.techName}</strong>
              <strong>{item.techProficiency}%</strong>
            </div>
            <Progress percent={item.techProficiency} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsComponent;
