import React from 'react';
import './Loading.scss';
import loadingGif from './loading.gif';
const Loading = () => {
  return (
    <div className='loading'>
      <h1>Events Tracker App</h1>
      <h4>loading...</h4>
      <img src={loadingGif} alt='loading' />
      <p>
        <a href='https://giphy.com/gifs/wait-IwSG1QKOwDjQk'>via GIPHY</a>
      </p>
    </div>
  );
};

export default Loading;
