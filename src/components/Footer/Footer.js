import './Footer.scss';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        Powered by the{' '}
        <a
          rel='noreferrer'
          href='https://developers.google.com/maps'
          target='_blank'
          className='googleApi'
        >
          Google Maps API
        </a>
        and the{' '}
        <a
          rel='noreferrer'
          href='https://api.nasa.gov'
          target='_blank'
          className='nasaApi'
        >
          Nasa API
        </a>
      </p>
    </footer>
  );
};

export default Footer;
