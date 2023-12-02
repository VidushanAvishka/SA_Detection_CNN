import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NeckQuestion.css';
import logoImage from '../images/Newlogo.png';
import { useGlobalContext } from '../GlobalContext.js';
 
function NeckQuestion() {
  const [selectedNeck, setSelectedNeck] = useState(null);
  const { globalArray, updateGlobalArrayAtIndex } = useGlobalContext();
  const navigate = useNavigate();
 
  const handleNeckChange = (neck) => {
    setSelectedNeck(neck);
  };
 
  const addItem = () => {
    if (selectedNeck) {
      globalArray[2] = selectedNeck === 'Yes' ? 'Yes' : 'No';
      console.log(globalArray);
      updateGlobalArrayAtIndex(2, globalArray[2]);
      navigate('/bq', { state: { array: globalArray } });
    }
  };
 
  const goToHome = () => {
    navigate('/');
  };
 
  return (
<div className="neck-question-container">
<img src={logoImage} alt="Logo" className="logo-image" />
<h4 className="neck-question-containerh1">NECK circumference greater than or equal 16 inches (40cm)?</h4>
 
      <div className="neck-option" onClick={() => handleNeckChange('No')}>
<input type="radio" name="neck" value="No" checked={selectedNeck === 'No'} readOnly />
<label>No</label>
</div>
 
      <div className="neck-option" onClick={() => handleNeckChange('Yes')}>
<input type="radio" name="neck" value="Yes" checked={selectedNeck === 'Yes'} readOnly />
<label>Yes</label>
</div>
 
      {selectedNeck && <p>You selected: {selectedNeck}</p>}
 
      <div className="next-button-containerg">
<Link to="/aq">        
<button className="next-button" onClick={goToHome} style={{ marginRight: '12px' }}>
          Go Back 
</button>
</Link>
<Link to="/bq">
<button className="next-button" onClick={addItem} disabled={!selectedNeck} style={{ marginLeft: '22px' }}>
          Next
</button>
</Link>

</div>
</div>
  );
}
 
export default NeckQuestion;