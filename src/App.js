import './App.css';
import { DateTime } from "luxon";
import React from 'react';

function App() {  
  const [date, setDate] = React.useState();
  const [state, setState] = React.useState({ show: true });
  const [count, setCount] = React.useState(0);

  function updateDate() {
    return setDate(new Date().toISOString());
  }
  function updateCounter() {
    return setCount(count + 1);
  }
  
  function showMessage() {    
    return setState({ show: !state.show});
  }
  
  let content = "";
  if (state.show)  content = ""    
    else content = new Date().toISOString();        
  //console.log(state.show, content);        
  return (
    <div className="App">            
      <button onClick={updateCounter}>Counter</button>
      <h3>{count}</h3>
      <button onClick={showMessage}>Show Date</button>
      <h3>{content}</h3>
    </div>    
  );
}

export default App;
