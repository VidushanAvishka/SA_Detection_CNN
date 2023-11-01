import React, { useState } from 'react';
import './BloodPressureLevelPage.css'; // Import the CSS file for styling
import home from '../images/Home.png'
import logoImage from '../images/Newlogo.png'
function BloodPressureLevelPage() {
  const [selectedBloodPressure, setSelectedBloodPressure] = useState(null);

  const handleBloodPressureChange = (event) => {
    setSelectedBloodPressure(event.target.value);
  };

  return (
    <div>
        <div className="home-button">
        <a href="/">
          <img src={home} alt="Home" />
        </a>
      </div>
    <div className="blood-pressure-level-container">
      <h1>Specify your blood pressure level range here</h1><br/>
      <table className="blood-pressure-table">
        <thead>
          <tr>
            <th>Blood pressure level</th>
            <th>Hypotension</th>
            <th>Normal Blood Pressure</th>
            <th>Mild Hyperglycemia</th>
            <th>Moderate Hyperglycemia</th>
            <th>Severe Hyperglycemia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>systolic blood pressure Range</td>
            <td>Less than 90</td>
            <td>Less than 120</td>
            <td>120-129</td>
            <td>130-139</td>
            <td>140 mm Hg or higher</td>
          </tr>
          <tr>
            <td>diastolic blood pressure Range</td>
            <td>Less than 60</td>
            <td>Less than 80</td>
            <td>Less than 80</td>
            <td>80-89</td>
            <td>90 mm Hg or higher</td>
          </tr>
          <tr>
              <td>Symbol</td>
              <td>P1</td>
              <td>P2</td>
              <td>P3</td>
              <td>P4</td>
              <td>P5</td>
            </tr>
        </tbody>
      </table><br/>
      <div className="options-row">
        <label className={`option ${selectedBloodPressure === "P1" ? 'selected' : ''}`}>
          <input
            type="radio"
            value="P1"
            checked={selectedBloodPressure === "P1"}
            onChange={handleBloodPressureChange}
          />
          P1
        </label>
        <label className={`option ${selectedBloodPressure === "P2" ? 'selected' : ''}`}>
          <input
            type="radio"
            value="P2"
            checked={selectedBloodPressure === "P2"}
            onChange={handleBloodPressureChange}
          />
          P2
        </label>
        <label className={`option ${selectedBloodPressure === "P3" ? 'selected' : ''}`}>
          <input
            type="radio"
            value="P3"
            checked={selectedBloodPressure === "P3"}
            onChange={handleBloodPressureChange}
          />
          P3
        </label>
        <label className={`option ${selectedBloodPressure === "P4" ? 'selected' : ''}`}>
          <input
            type="radio"
            value="P4"
            checked={selectedBloodPressure === "P4"}
            onChange={handleBloodPressureChange}
          />
          P4
        </label>
        <label className={`option ${selectedBloodPressure === "P5" ? 'selected' : ''}`}>
          <input
            type="radio"
            value="P5"
            checked={selectedBloodPressure === "P5"}
            onChange={handleBloodPressureChange}
          />
          P5
        </label>
      </div>
      {selectedBloodPressure && (
        <p>You selected: {selectedBloodPressure}</p>
      )}
      <div className="navigation-buttons4">
        <a href="/bsq" className="navigation-button2">Previous</a>
        <a href="/bpq" className="navigation-button2">Next</a>
       </div>
       <img src={logoImage} alt="Logo" className="logo-image" /> {/* Add the logo image */}
    </div>
    
    </div>
  );
}

export default BloodPressureLevelPage;
