import React from 'react';  
import logo from './logo.svg';
import './App.css';


import {TodoApp} from './TodoApp';


function App() {
  const ToDos = [];
  return (
    <div>
      <TodoApp items />
      {/*<TodoList TodoList={ToDos}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          &lt;h1&gt;TODO React App&lt;/h1&gt;
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}

      

    </div>
  );
}


export default App;
