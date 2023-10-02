import React from 'react';
import ContactForm from './contactForm';
import { CONTACT_INFO } from '../Constants';

const ContactComponent: React.FC = () => {
  return (
    <section id='contact'>
      <h1 className='about-heading'>Contact Me</h1>
      <div className='contact-upper'>
        {CONTACT_INFO.map((contactItem) =>
          !Array.isArray(contactItem.titleInfo) ? (
            <div key={contactItem.id} className='address'>
              <i className={`${contactItem.contactIcon} location`}></i>
              <div className='address-right'>
                <strong className='address-title'>{contactItem.title}</strong>
                <p className='address-des'>{contactItem.titleInfo}</p>
              </div>
            </div>
          ) : (
            <div key={contactItem.id} className='address'>
              <i className={`${contactItem.contactIcon} location`}></i>
              <div className='address-right'>
                <strong className='address-title'>{contactItem.title}</strong>
                <p className='address-des'>
                  {contactItem.titleInfo.map((socialItem) => (
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
                </p>
              </div>
            </div>
          )
        )}
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactComponent;
