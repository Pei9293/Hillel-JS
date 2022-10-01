import React, { useState } from 'react';
import './App.css';

const Header = () => <div>Header text</div>;
const Footer = () => <div>Footer text</div>;

function Todo() {
  const [message, setMessage] = useState('');
  const [items, setItem] = useState([
    'XXX',
    'YYY',
    'QQQ',
  ]);

  function onAddBtnClick() {
    console.log(message);

    setItem([...items, message]);

    setMessage('');
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <>
      <ul id="todoList">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <input value={message} onChange={onMessageChange} type="text" placeholder="Введите сообщение" />
      <button id="msgButton" onClick={onAddBtnClick}>Отправить</button>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <Footer />
    </div>
  )
}

export default App;