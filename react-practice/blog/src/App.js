import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  
  let [title,titleState] = useState(['Korea', 'Japan', 'Vietnam']); // [a, b] a : arg, b : state change
  let [date, dateState] = useState(['6.03.2019', '7.28.2019','12.13.2018']);
  let [counter, counterState] = useState([0, 0, 0]);
  let index = 0;

  function titleChange() {
    let newArr = [...title];
    newArr[0] = 'South Korea';
    titleState( newArr ); 
  }

  return (
    <div className="App">
      <div className="nav">
        <div style={ { fontSize : '30px' } }>Travel Blog</div>
      </div>
      
      <List t={title} c={counter} cState={counterState} tState={titleState} i={index} d={date} />
      {/* <div className="blog-list">
        <h2> { title[0] } <span onClick={ ()=>{
          counterState([counter[0]+1, counter[1], counter[2]]);
        } } style={{ fontSize: '12px' }}>👍{counter[0]}</span> </h2>
        <p> { date[0] } </p>
        <button className="btn" onClick={ titleChange }>click!</button><hr/>
      </div> */}
      <div className="blog-list">
        <h2> { title[1] } </h2>
        <p> { date[1] } </p><hr/>
      </div>
      <div className="blog-list">
        <h2> { title[2] } </h2>
        <p> { date[2] } </p><hr/>
      </div>

      <Modal />

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>title</h2>
      <p>data</p>
      <p>content</p>
    </div>
  )
}

function List(props) {
  return (
    <div className="blog-list">
      <h2> { props.t[props.i] } 
      <span onClick={ ()=>{
        let arr = [...props.c]
        arr[props.i] = arr[props.i] + 1;
        props.cState(arr);
      } } style={{ fontSize: '12px' }}>👍{props.c[props.i]}</span> 
      </h2>
      <p> { props.d[props.i] } </p>
      <button className="btn" onClick={ ()=> {
        props.tState(['South Korea', 'Japan', 'Vietnam'])
      }}>click!</button><hr/>
    </div>
  )
}

export default App;
