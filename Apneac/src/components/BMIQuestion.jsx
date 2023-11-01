import React, { useState } from 'react';
import './BMIQuestion.css'; // Import the CSS file for styling
import bmiImage from '../images/BMI.png'; // Replace with the path to your BMI image
import logoImage from '../images/Newlogo.png';
import home from '../images/Home.png'
function BMIQuestion() {
  const [selectedBMI, setSelectedBMI] = useState(null);

  const handleBMIChange = (event) => {
    setSelectedBMI(event.target.value);
  };

  return (

    <div className='body'>
       <div className="home-button">
        <a href="/">
          <img src={home} alt="Home" />
        </a>
       </div>
       
    <div className="bmi-question-container">
      
      <div className="bmi-question-column">
        <h1>What is your BMI?</h1>
        <img src={bmiImage} alt="BMI" className="bmi-image" />
      </div>
      <div className="bmi-options-column">
        <p>Select the range which your BMI belongs.</p>
        <div className="bmi-options">
          <label className={`bmi-option ${selectedBMI === "Below 18.5" ? 'selected' : ''}`}>
            <input
              type="radio"
              value="Below 18.5"
              checked={selectedBMI === "Below 18.5"}
              onChange={handleBMIChange}
            />
            Below 18.5
          </label>
          <label className={`bmi-option ${selectedBMI === "Between 18.5 and 24.9" ? 'selected' : ''}`}>
            <input
              type="radio"
              value="Between 18.5 and 24.9"
              checked={selectedBMI === "Between 18.5 and 24.9"}
              onChange={handleBMIChange}
            />
            Between 18.5 and 24.9
          </label>
          <label className={`bmi-option ${selectedBMI === "Between 25 and 29.9" ? 'selected' : ''}`}>
            <input
              type="radio"
              value="Between 25 and 29.9"
              checked={selectedBMI === "Between 25 and 29.9"}
              onChange={handleBMIChange}
            />
            Between 25 and 29.9
          </label>
          <label className={`bmi-option ${selectedBMI === "Between 30 and 34.9" ? 'selected' : ''}`}>
            <input
              type="radio"
              value="Between 30 and 34.9"
              checked={selectedBMI === "Between 30 and 34.9"}
              onChange={handleBMIChange}
            />
            Between 30 and 34.9
          </label>
          <label className={`bmi-option ${selectedBMI === "35 or higher" ? 'selected' : ''}`}>
            <input
              type="radio"
              value="35 or higher"
              checked={selectedBMI === "35 or higher"}
              onChange={handleBMIChange}
            />
            35 or higher
          </label>
        </div>
      </div>
      
      
    </div>
    <div className="navigation-buttons1">
        <a href="/gq" className="navigation-button">Previous</a>
        <a href="/bsq" className="navigation-button">Next</a>
       </div>
    
       <img src={logoImage} alt="Logo" className="logo-image" /> {/* Add the logo image */}
      </div>
 
  );
}

export default BMIQuestion;
