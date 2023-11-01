import React, { useState } from 'react';
import './BloodSugarLevelQuestion.css'; // Import the CSS file for styling
import logoImage from '../images/Newlogo.png';
import Db from '../images/Db.png'
import home from '../images/Home.png'
function BloodSugarLevelQuestion() {
  const [selectedSugarLevel, setSelectedSugarLevel] = useState(null);

  const handleSugarLevelChange = (event) => {
    setSelectedSugarLevel(event.target.value);
  };

  return (
    <div >

    
    <div className="blood-sugar-question-container">
      <h1>What is your Age?</h1>
      <h3>Select the range which your Age belongs</h3>
      <div className="home-button">
        <a href="/">
          <img src={home} alt="Home" />
        </a>
      </div>
      <div className="sugar-level-options">
        <div className="sugar-level-row">
          <label className={`sugar-level-option ${selectedSugarLevel === "Below 25 " ? 'selected' : ''}`}>
            <input
              type="radio"
              value="Below 25"
              checked={selectedSugarLevel === "Below 25"}
              onChange={handleSugarLevelChange}
            />
            Below 25
          </label>
          <label className={`sugar-level-option ${selectedSugarLevel === "Between 100 and 199 mg/dL" ? 'selected' : ''}`}>
            <input
              type="radio"
              value="Between 100 and 199 mg/dL"
              checked={selectedSugarLevel === "Between 100 and 199 mg/dL"}
              onChange={handleSugarLevelChange}
            />
            Between 25 and 45
          </label>
          <img src={Db} alt='Db' className='Db'></img>
        </div>
        <div className="sugar-level-row">
          <label className={`sugar-level-option ${selectedSugarLevel === "Between 70 and 99 mg/dL" ? 'selected' : ''}`}>
            <input
              type="radio"
              value="Between 70 and 99 mg/dL"
              checked={selectedSugarLevel === "Between 70 and 99 mg/dL"}
              onChange={handleSugarLevelChange}
            />
            Between 45 and 55 
          </label>
          <label className={`sugar-level-option ${selectedSugarLevel === "Between 200 and 399 mg/dL" ? 'selected' : ''}`}>
            <input
              type="radio"
              value="Between 200 and 399 mg/dL"
              checked={selectedSugarLevel === "Between 200 and 399 mg/dL"}
              onChange={handleSugarLevelChange}
            />
            Between 55 and 65
          </label>
        </div>
        <div className="centered-sugar-level-row">
          <label className={`sugar-level-option ${selectedSugarLevel === "400 mg/dL or higher" ? 'selected' : ''}`}>
            <input
              type="radio"
              value="400 mg/dL or higher"
              checked={selectedSugarLevel === "400 mg/dL or higher"}
              onChange={handleSugarLevelChange}
            />
            65 or higher
          </label>
        </div>
      </div><br/><br/><br/><br/>
      <div className="navigation-buttons1">
        <a href="/bq" className="navigation-button">Previous</a>
        <a href="/t" className="navigation-button">Next</a>
       </div>
       
    </div>
    <img src={logoImage} alt="Logo" className="logo-image" /> {/* Add the logo image */}
    </div>
  );
}

export default BloodSugarLevelQuestion;
