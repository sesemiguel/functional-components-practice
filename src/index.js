import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyInfo(){
  return (
    <div>
      <h1 style={{color: "red"}}>Miguel Karlo Sese</h1>
      <p>I am learning React JS cause I want to.</p>
      <ul>
        <li>Coron</li>
        <li>Dumaguete</li>
        <li>Siargao</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />,document.getElementById('root')
);
