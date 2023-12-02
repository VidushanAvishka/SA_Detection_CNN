import React from 'react';
import './Main.css';
import videobg from '../Videos/9.mp4';
import videointro from '../Videos/10.mp4';

function Main() {
  return (
    <div>
      <header className='header'>
        <video className='header-video' src={videobg} autoPlay loop muted></video>
      </header>

      <body>
        <br />
        <text className='welcome-text'>WELCOME!</text>
        <br />
        <br />
        <div className="containerx">
          <video className='intro-video' src={videointro} autoPlay loop muted></video>
        </div>

        <a href="/page" className="stylish-button">Use Apneac</a>
      </body>
    </div>
  );
}

export default Main;
