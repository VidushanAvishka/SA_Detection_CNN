import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ObsQuestion.css';
import logoImage from '../images/Newlogo.png';
import { useGlobalContext } from '../GlobalContext.js';
 
function ObsQuestion() {
  const [selectedObs, setSelectedObs] = useState(null);
  const { globalArray, updateGlobalArrayAtIndex } = useGlobalContext();
  const navigate = useNavigate();
 
  const handleObsChange = (obs) => {
    setSelectedObs(obs);
  };
 
  const addItem = () => {
    if (selectedObs) {
      globalArray[5] = selectedObs === 'Yes' ? 'Yes' : 'No';
      console.log(globalArray);
      updateGlobalArrayAtIndex(5, globalArray[5]);
      navigate('/pq', { state: { array: globalArray } });
    }
  };
 
  const goToHome = () => {
    navigate('/');
  };
 
  return (
<div className="obs-question-container">
<img src={logoImage} alt="Logo" className="logo-image" />
<h4 className="obs-question-containerh1">Has anyone OBSERVED you stop breathing during
your sleep?</h4>
 
      <div className="obs-option" onClick={() => handleObsChange('No')}>
<input type="radio" name="age" value="No" checked={selectedObs === 'No'} readOnly />
<label>No</label>
</div>
 
      <div className="obs-option" onClick={() => handleObsChange('Yes')}>
<input type="radio" name="obs" value="Yes" checked={selectedObs === 'Yes'} readOnly />
<label>Yes</label>
</div>
 
      {selectedObs && <p>You selected: {selectedObs}</p>}
 
      <div className="next-button-containerg">
<Link to="/tq">        
<button className="next-button" onClick={goToHome} style={{ marginRight: '12px' }}>
          Go Back 
</button>
</Link>
<Link to="/pq">
<button className="next-button" onClick={addItem} disabled={!selectedObs} style={{ marginLeft: '22px' }}>
          Next
</button>
</Link>

</div>
</div>
  );
}
 
export default ObsQuestion;