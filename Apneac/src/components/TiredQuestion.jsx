import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TiredQuestion.css';
import logoImage from '../images/Newlogo.png';
import { useGlobalContext } from '../GlobalContext.js';
 
function TirQuestion() {
  const [selectedTir, setSelectedTir] = useState(null);
  const { globalArray, updateGlobalArrayAtIndex } = useGlobalContext();
  const navigate = useNavigate();
 
  const handleTirChange = (tir) => {
    setSelectedTir(tir);
  };
 
  const addItem = () => {
    if (selectedTir) {
      globalArray[4] = selectedTir === 'Yes' ? 'Yes' : 'No';
      console.log(globalArray);
      updateGlobalArrayAtIndex(4, globalArray[4]);
      navigate('/oq', { state: { array: globalArray } });
    }
  };
 
  const goToHome = () => {
    navigate('/');
  };
 
  return (
<div className="tir-question-container">
<img src={logoImage} alt="Logo" className="logo-image" />
<h4 className="tir-question-containerh1">Do you often feel TIRED, fatigued, or sleepy during
daytime?</h4>
 
      <div className="tir-option" onClick={() => handleTirChange('No')}>
<input type="radio" name="age" value="No" checked={selectedTir === 'No'} readOnly />
<label>No</label>
</div>
 
      <div className="tir-option" onClick={() => handleTirChange('Yes')}>
<input type="radio" name="age" value="Yes" checked={selectedTir === 'Yes'} readOnly />
<label>Yes</label>
</div>
 
      {selectedTir && <p>You selected: {selectedTir}</p>}
 
      <div className="next-button-containerg">
<Link to="/sq">        
<button className="next-button" onClick={goToHome} style={{ marginRight: '12px' }}>
          Go Back 
</button>
</Link>
<Link to="/oq">
<button className="next-button" onClick={addItem} disabled={!selectedTir} style={{ marginLeft: '22px' }}>
          Next
</button>
</Link>

</div>
</div>
  );
}
 
export default TirQuestion;