import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import girl from '../images/girl.png';
import boy from '../images/boy.png';
import './GenderQuestion.css';
import logoImage from '../images/Newlogo.png';
import { useGlobalContext } from '../GlobalContext.js';
 
function GenderQuestion() {
  const [selectedGender, setSelectedGender] = useState(null);
  const { globalArray, updateGlobalArrayAtIndex } = useGlobalContext();
  const navigate = useNavigate();
 
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
 
  const addItem = () => {
    if (selectedGender) {
      globalArray[0] = selectedGender === 'Male' ? 'Yes' : 'No';
      console.log(globalArray);
      updateGlobalArrayAtIndex(0, globalArray[0]);
      navigate('/aq', { state: { array: globalArray } });
    }
  };
 
  const goToHome = () => {
    navigate('/');
  };
 
  return (
<div className="gender-question-container">
<img src={logoImage} alt="Logo" className="logo-image" />
<h4 className="gender-question-containerh1">What is your Gender?</h4>
 
      <div className="gender-option" onClick={() => handleGenderChange('Female')}>
<img src={girl} alt="Female" className="gender-image" />
<input type="radio" name="gender" value="Female" checked={selectedGender === 'Female'} readOnly />
<label>Female</label>
</div>
 
      <div className="gender-option" onClick={() => handleGenderChange('Male')}>
<img src={boy} alt="Male" className="gender-image" />
<input type="radio" name="gender" value="Male" checked={selectedGender === 'Male'} readOnly />
<label>Male</label>
</div>
 
      {selectedGender && <p>You selected: {selectedGender}</p>}
 
      <div className="next-button-containerg">
<Link to="/page">        
<button className="next-button" onClick={goToHome} style={{ marginRight: '12px' }}>
          Back to Home
</button>
</Link>
<Link to="/aq">
<button className="next-button" onClick={addItem} disabled={!selectedGender} style={{ marginLeft: '22px' }}>
          Next
</button>
</Link>

</div>
</div>
  );
}
 
export default GenderQuestion;