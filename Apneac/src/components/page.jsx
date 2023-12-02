import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';

const Page = () => {
  return (
    <div className="containerz">
      <h1>Are you an Obstructive Sleep Apnea patient?</h1>
      <p>Description of the page</p>
      
      <div className="content-section">
        <div className="section">
          <Link to="/gq">
            <button className="berlin-button">STOP-BANG  Questionnaire</button>
          </Link>
          <p>STOP-Bang questionnaire is used for identifying the high-risk OSA patients</p>
        </div>

        <div className="section">
          <Link to="/t">
            <button className="ai-button">Apneac AI</button>
          </Link>
          <p>Use our AI models to identify OSA</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
