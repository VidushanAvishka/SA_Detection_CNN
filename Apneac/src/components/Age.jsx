import React, { useState } from 'react';
import './AgeQuestion.css'; // Import the CSS file for styling
import ageImage from '../images/Age.png'; // Replace with the path to your BMI image
import logoImage from '../images/Newlogo.png';
import home from '../images/Home.png';

function AgeQuestion() {
    const [selectedAge, setSelectedAge] = useState(null);
  
    const handleAgeChange = (event) => {
      setSelectedAge(event.target.value);
    };

    return (

        <div className='body'>
           <div className="home-button">
            <a href="/">
              <img src={home} alt="Home" />
            </a>
           </div>
        <div className="age-question-container">
          
          <div className="age-question-column">
            <h1>What is your BMI?</h1>
            <img src={ageImage} alt="Age" className="age-image" />
          </div>
          <div className="age-options-column">
            <p>Select the range which your Age belongs.</p>
            <div className="age-options">
              <label className={`age-option ${selectedAge === "Below 20" ? 'selected' : ''}`}>
                <input
                  type="radio"
                  value="Below 20"
                  checked={selectedAge === "Below 20"}
                  onChange={handleAgeChange}
                />
                Below 20
              </label>
              <label className={`age-option ${selectedAge === "Between 20 and 30" ? 'selected' : ''}`}>
                <input
                  type="radio"
                  value="Between 20 and 30"
                  checked={selectedAge === "Between 20 and 30"}
                  onChange={handleAgeChange}
                />
                Between 20 and 30
              </label>
              <label className={`age-option ${selectedAge === "Between 30 and 40" ? 'selected' : ''}`}>
                <input
                  type="radio"
                  value="Between 30 and 40"
                  checked={selectedAge === "Between 30 and 40"}
                  onChange={handleAgeChange}
                />
                Between 30 and 40
              </label>
              <label className={`age-option ${selectedAge === "Between 40 and 60" ? 'selected' : ''}`}>
                <input
                  type="radio"
                  value="Between 40 and 60"
                  checked={selectedAge === "Between 40 and 60"}
                  onChange={handleAgeChange}
                />
                Between 40 and 60
              </label>
              <label className={`age-option ${selectedAge === "60 or higher" ? 'selected' : ''}`}>
                <input
                  type="radio"
                  value="60 or higher"
                  checked={selectedAge === "60 or higher"}
                  onChange={handleAgeChange}
                />
                60 or higher
              </label>
            </div>
          </div>
          
          <div className="navigation-buttons1">
            <a href="/gq" className="navigation-button">Previous</a>
            <a href="/bsq" className="navigation-button">Next</a>
           </div>
        </div>
        
           <img src={logoImage} alt="Logo" className="logo-image" /> {/* Add the logo image */}
          </div>
     
      );




    


}
export default AgeQuestion;