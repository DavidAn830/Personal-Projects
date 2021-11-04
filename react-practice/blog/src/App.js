import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  
  let [title,titleState] = useState(['Korea', 'Japan', 'Vietnam']); // [a, b] a : arg, b : state change
  let [date, dateState] = useState(['6.03.2019', '7.28.2019','12.13.2018']);
  let [counter, counterState] = useState(0);

  return (
    <div className="App">
      <div className="nav">
        <div style={ { fontSize : '30px' } }>Travel Blog</div>
      </div>
      
      <div className="blog-list">
        <h2> { title[0] } <span onClick={ ()=>{
          counterState(counter+1);
        } } style={{ fontSize: '12px' }}>👍{counter}</span> </h2>
        <p> { date[0] } </p><hr/>
      </div>
      <div className="blog-list">
        <h2> { title[1] } </h2>
        <p> { date[1] } </p><hr/>
      </div>
      <div className="blog-list">
        <h2> { title[2] } </h2>
        <p> { date[2] } </p><hr/>
      </div>
      {/* {title.forEach(e => {
        <div className="blog-list">
          <h3> { e } </h3>
          <p>11-23-2021</p><hr></hr>
        </div>
      })} */}
    </div>
  );
}

export default App;
