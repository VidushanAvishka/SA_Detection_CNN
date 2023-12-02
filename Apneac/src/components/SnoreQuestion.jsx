import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SnoreQuestion.css';
import logoImage from '../images/Newlogo.png';
import { useGlobalContext } from '../GlobalContext.js';
 
function SnoQuestion() {
  const [selectedSno, setSelectedSno] = useState(null);
  const { globalArray, updateGlobalArrayAtIndex } = useGlobalContext();
  const navigate = useNavigate();
 
  const handleSnoChange = (sno) => {
    setSelectedSno(sno);
  };
 
  const addItem = () => {
    if (selectedSno) {
      globalArray[3] = selectedSno === 'Yes' ? 'Yes' : 'No';
      console.log(globalArray);
      updateGlobalArrayAtIndex(3, globalArray[3]);
      navigate('/bq', { state: { array: globalArray } });
    }
  };
 
  const goToHome = () => {
    navigate('/');
  };
 
  return (
<div className="sno-question-container">
<img src={logoImage} alt="Logo" className="logo-image" />
<h4 className="age-question-containerh1">Do you SNORE loudly (louder than talking or loud
enough to be heard through closed doors)?</h4>
 
      <div className="sno-option" onClick={() => handleSnoChange('No')}>
<input type="radio" name="age" value="No" checked={selectedSno === 'No'} readOnly />
<label>No</label>
</div>
 
      <div className="sno-option" onClick={() => handleSnoChange('Yes')}>
<input type="radio" name="age" value="Yes" checked={selectedSno === 'Yes'} readOnly />
<label>Yes</label>
</div>
 
      {selectedSno && <p>You selected: {selectedSno}</p>}
 
      <div className="next-button-containerg">
<Link to="/nq">        
<button className="next-button" onClick={goToHome} style={{ marginRight: '12px' }}>
          Go Back 
</button>
</Link>
<Link to="/tq">
<button className="next-button" onClick={addItem} disabled={!selectedSno} style={{ marginLeft: '22px' }}>
          Next
</button>
</Link>

</div>
</div>
  );
}
 
export default SnoQuestion;