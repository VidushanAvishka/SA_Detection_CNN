import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AgeQuestion.css';
import logoImage from '../images/Newlogo.png';
import { useGlobalContext } from '../GlobalContext.js';
 
function AgeQuestion() {
  const [selectedAge, setSelectedAge] = useState(null);
  const { globalArray, updateGlobalArrayAtIndex } = useGlobalContext();
  const navigate = useNavigate();
 
  const handleAgeChange = (age) => {
    setSelectedAge(age);
  };
 
  const addItem = () => {
    if (selectedAge) {
      globalArray[1] = selectedAge === 'Yes' ? 'Yes' : 'No';
      console.log(globalArray);
      updateGlobalArrayAtIndex(1, globalArray[1]);
      navigate('/nq', { state: { array: globalArray } });
    }
  };
 
  const goToHome = () => {
    navigate('/');
  };
 
  return (
<div className="age-question-container">
<img src={logoImage} alt="Logo" className="logo-image" />
<h4 className="age-question-containerh1">Age over 50 years old?</h4>
 
      <div className="gender-option" onClick={() => handleAgeChange('No')}>
<input type="radio" name="age" value="No" checked={selectedAge === 'No'} readOnly />
<label>No</label>
</div>
 
      <div className="age-option" onClick={() => handleAgeChange('Yes')}>
<input type="radio" name="age" value="Yes" checked={selectedAge === 'Yes'} readOnly />
<label>Yes</label>
</div>
 
      {selectedAge && <p>You selected: {selectedAge}</p>}
 
      <div className="next-button-containerg">
<Link to="/gq">        
<button className="next-button" onClick={goToHome} style={{ marginRight: '12px' }}>
          Go Back 
</button>
</Link>
<Link to="/nq">
<button className="next-button" onClick={addItem} disabled={!selectedAge} style={{ marginLeft: '22px' }}>
          Next
</button>
</Link>

</div>
</div>
  );
}
 
export default AgeQuestion;