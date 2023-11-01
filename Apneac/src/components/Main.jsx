import React from 'react'
import './Main.css';
import videobg from '../Videos/9.mp4';
import videointro from '../Videos/10.mp4';
//import logo from '../images/Newlogo.png'
//import F from '../images/f.png'
//import GenderQuestion from './GenderQuestion';

//import GQ from './GenderQuestion'; // Import the GenderQuestion component
//import { Link } from 'react-router-dom';


function Main() {
  return (
    
    <div  >
      <header className='header'>
      <video className='header-video' src={videobg} autoPlay loop muted></video>
      
      
       </header>
      
      <body>
      
    
      <br></br>
        <text style={{ fontSize: 100,color:'white', fontFamily:'Arial Black' }}> WELCOME! </text><br></br>
        
      <br></br>
      <div className="container">
      <video className='intro-video' src={videointro} autoPlay loop muted></video>
      
        </div>
        
      <a href="/gq"><button className="stylish-button">Use Apneac</button></a>
      </body>
    </div>

    
  )
}

export default Main
