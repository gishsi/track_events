import './Info.scss';
import React from 'react';

const Info = ({ lat, lng, description, title }) => {
  return (
    <div className='info'>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className='coordinates'>
        <p>
          <span>Latitude:</span>
          {lat}
        </p>
        <p>
          <span>Longitude:</span>
          {lng}
        </p>
      </div>
    </div>
  );
};

export default Info;
