import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PreQuestion.css';
import logoImage from '../images/Newlogo.png';
import { useGlobalContext } from '../GlobalContext.js';
 
function PreQuestion() {
  const [selectedPre, setSelectedPre] = useState(null);
  const { globalArray, updateGlobalArrayAtIndex } = useGlobalContext();
  const navigate = useNavigate();
 
  const handlePreChange = (pre) => {
    setSelectedPre(pre);
  };
 
  const addItem = () => {
    if (selectedPre) {
      globalArray[6] = selectedPre === 'Yes' ? 'Yes' : 'No';
      console.log(globalArray);
      updateGlobalArrayAtIndex(6, globalArray[6]);
      navigate('/SBR', { state: { array: globalArray } });
    }
  };
 
  const goToHome = () => {
    navigate('/');
  };
 
  return (
<div className="pre-question-container">
<img src={logoImage} alt="Logo" className="logo-image" />
<h4 className="pre-question-containerh1">Do you have or are you being treated for high blood
PRESSURE?</h4>
 
      <div className="pre-option" onClick={() => handlePreChange('No')}>
<input type="radio" name="pre" value="No" checked={selectedPre === 'No'} readOnly />
<label>No</label>
</div>
 
      <div className="pre-option" onClick={() => handlePreChange('Yes')}>
<input type="radio" name="pre" value="Yes" checked={selectedPre === 'Yes'} readOnly />
<label>Yes</label>
</div>
 
      {selectedPre && <p>You selected: {selectedPre}</p>}
 
      <div className="next-button-containerg">
<Link to="/oq">        
<button className="next-button" onClick={goToHome} style={{ marginRight: '12px' }}>
          Go Back 
</button>
</Link>
<Link to="/SBR">
<button className="next-button" onClick={addItem} disabled={!selectedPre} style={{ marginLeft: '22px' }}>
          Next
</button>
</Link>

</div>
</div>
  );
}
 
export default PreQuestion;