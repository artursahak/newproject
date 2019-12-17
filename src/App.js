import React from 'react';
import logo from './logo.svg';
import './App.css';
import {App1,App2,App3} from './application';

class App extends React.Component{

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <App1 />
        </p>
        <p>
          <App2 />
        </p>
         <p>
          <App3 />
        </p>
        
         
        
      </header>
    </div>
   )
 }
}

export default App;
