import React from 'react'
import logo from './logo.svg';
import './App.css';
import Context from "./Context";
import ClassContext from './ClassContext'
import Test from './test'



function App() {
  return (
    <ThemeContext.Provider value="dark1">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Context />
          <p>and context is not change by hot reload</p>
          <ClassContext />
          <Test />
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export const ThemeContext = React.createContext('light');


export default App;
