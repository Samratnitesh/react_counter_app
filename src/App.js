import './App.css';
import { useState } from 'react';

function App() {
  let [counter,setCounter] = useState(10)

  const addValue = () => {
    console.log("Value added",Math.random())
    if(counter<20){
    setCounter(counter+1);}
  }
  const removeValue = ()=>{
    if(counter>0){
    setCounter(counter-1);}
  }
  return (
    <div className="App">
      <h1>React Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </div>
  );
}

export default App;
