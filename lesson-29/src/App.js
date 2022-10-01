import React from 'react';
import Todo from './Todo';
import './App.css';

const Header = ({ text }) => <h1>{text}</h1>;
const Footer = ({ text }) => <div>{text}</div>;


function App() {
  const INITIAL_TODO_LIST = [
    {"title":"default 1", "status":true, "id":"1"},
    {"title":"default 2", "status":false, "id":"2"},
  ]

  return (
    <div className="App">
      <Header text={'Todo list'} />
      <Todo defaultMessage={'Hello World'} defaultList={INITIAL_TODO_LIST} />
      <Footer text={'Made by Hillel'} />
    </div>
  )
}

export default App;