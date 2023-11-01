import React, { useState } from 'react';
import girl from '../images/girl.png';
import boy from '../images/boy.png';
import './GenderQuestion.css'; // Import the CSS file for styling
import logoImage from '../images/Newlogo.png';
import home from '../images/Home.png'
function GenderQuestion() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    
   <div >
  <img src={logoImage} alt="Logo" className="logo-image" /> {/* Add the logo image */}

    <div className="gender-question-container">
    <div className="home-button">
        <a href="/">
          <img src={home} alt="Home" />
        </a>
       </div>

      <h1 className='gender-question-containerh1'>What is your Gender?</h1>
      <div className="radio-container">
      <img src={girl} alt="Female" className="gender-image" /><br/>
        <label className="radio-label">
          <input
            type="radio"
            value="Female"
            checked={selectedGender === "Female"}
            onChange={handleGenderChange}
          />
         
          Female
        </label>
        <img src={boy} alt="Male" className="gender-image" />
        <label className="radio-label">
          <input
            type="radio"
            value="Male"
            checked={selectedGender === "Male"}
            onChange={handleGenderChange}
          />
          
          Male
        </label>
      </div>
      {selectedGender && (
        <p>You selected: {selectedGender}</p>
      )}<br/><br/><br/>
<div className="next-button-container">
          
          <a href="/bq"><button className="next-button" >
            Next
          </button></a>
        </div>
        </div>
    </div>

    
  );
}

export default GenderQuestion;
