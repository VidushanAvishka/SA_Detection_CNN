import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../GlobalContext';
import { Link, useNavigate } from 'react-router-dom';
import './StopBangresult.css';

const ResultPage = () => {
  const { globalArray } = useGlobalContext();
  const [yesCount, setYesCount] = useState(0);
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Count the number of "Yes" and "No" in the global array
    const countResponses = () => {
      let yes = 0;
    

      globalArray.forEach(response => {
        if (response === 'Yes') {
          yes++;
        } 
      });

      setYesCount(yes);
    
    };

    countResponses();
  }, [globalArray]);

  useEffect(() => {
    // Determine the result based on the counts
    const determineResult = () => {
      if (yesCount >= 5 && yesCount <= 8) {
        setResult('High risk of OSA');
      } else if (yesCount >= 3 && yesCount <= 4) {
        setResult('Intermediate risk of OSA');
      } else if (yesCount >= 0 && yesCount <= 2) {
        setResult('Low risk of OSA');
      }
    };

    determineResult();
  }, [yesCount]);

  return (
    <div>
      <h1>OSA Risk Assessment Result</h1>
      
      <p3>Result: {result}</p3>
          <div className='setto'>
             <div className='setion-tab'>
      {/* Add a button to navigate to the home page */}
      <button onClick={() => navigate('/PQ')} className="home-button">Go Back</button>
            
      {/* Use Link to navigate to the AI model page */}
      <Link to="/page">
        <button className="Home">Go To Home page</button>
      </Link>
      </div>
      </div>
    </div>
    
  );


  
};

export default ResultPage;
