import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BMIQuestion.css';
import logoImage from '../images/Newlogo.png';
import { useGlobalContext } from '../GlobalContext.js';
 
function BmiQuestion() {
  const [selectedBmi, setSelectedBmi] = useState(null);
  const { globalArray, updateGlobalArrayAtIndex } = useGlobalContext();
  const navigate = useNavigate();
 
  const handleBmiChange = (bmi) => {
    setSelectedBmi(bmi);
  };
 
  const addItem = () => {
    if (selectedBmi) {
      globalArray[1] = selectedBmi === 'Yes' ? 'Yes' : 'No';
      console.log(globalArray);
      updateGlobalArrayAtIndex(1, globalArray[1]);
      navigate('/sq', { state: { array: globalArray } });
    }
  };
 
  const goToHome = () => {
    navigate('/');
  };
 
  return (
<div className="bmi-question-container">
<img src={logoImage} alt="Logo" className="logo-image" />
<h4 className="bmi-question-containerh1">BMI more than 35kg/m2?</h4>
 
      <div className="bmi-option" onClick={() => handleBmiChange('No')}>
<input type="radio" name="bmi" value="No" checked={selectedBmi === 'No'} readOnly />
<label>No</label>
</div>
 
      <div className="bmi-option" onClick={() => handleBmiChange('Yes')}>
<input type="radio" name="bmi" value="Yes" checked={selectedBmi === 'Yes'} readOnly />
<label>Yes</label>
</div>
 
      {selectedBmi && <p>You selected: {selectedBmi}</p>}
 
      <div className="next-button-containerg">
<Link to="/nq">        
<button className="next-button" onClick={goToHome} style={{ marginRight: '12px' }}>
          Go Back 
</button>
</Link>
<Link to="/sq">
<button className="next-button" onClick={addItem} disabled={!selectedBmi} style={{ marginLeft: '22px' }}>
          Next
</button>
</Link>

</div>
</div>
  );
}
 
export default BmiQuestion;