import React from 'react';

const CustomFooter = (): JSX.Element => {
  return (
    <div className='footer'>
      Copyright ©2022 <strong>My Resume. </strong>
      All Rights Reserved
      <p className='design'>
        Designed by <span className='footer-name'>Arsh</span>
      </p>
    </div>
  );
};

export default CustomFooter;
