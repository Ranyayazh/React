import './App.css';
import React from 'react';
import './index.js';

function App() {
  return (
  <div>
  <div>
    <h1>WELCOME TO MY WEBSITE</h1>
    </div>

    <h2>
      <b>I AM RANYA</b>
    </h2>
    <p id='output'></p>

    <button class="button" onClick="printMessage()">Contact No</button>
    <button class="button" onClick="printMessage()">Mail ID</button>
    <button class="button" onClick="printMessage()">LinkedIn</button>
    <button class="button" onClick="printMessage()">GithubId</button>
    <h3>
       Determined student interested in learning new things
    </h3>
    <div>
    <h4>School Education:</h4>
        <p>
            <p>San jose Matriculation Higher Secondary School</p>
            <p>Metro Matriculation Higher Secondary School</p>
        </p>
    <h5>College:</h5>
        <p>
           <p>Kumaraguru College of Technology</p>   
        </p>
    
    <h6>Hobbies:</h6>
        <p>
          <p>Drawing</p>
          <p>Cooking</p>
          <p>Reading Books</p>          
        </p>
    </div> 
        <div>
    <h7>Skills:</h7>
      <p>
        <p>FullStack</p>
        <p>IoT</p>
        <p>Pyton</p>
      </p>  

      <h8>Language I can Speak:</h8>
      <div class="outerbox">
           <div class="box" className='para1'>Tamil</div>
           <div class="box" className='para1'>Malayalam</div>
           <div class="box" className='para1'>French</div>
           <div class="box" className='para1'>English</div>
      </div> 
      </div>

      <div>

      </div>
      </div>
      
    
  );
} 
export default App; 
