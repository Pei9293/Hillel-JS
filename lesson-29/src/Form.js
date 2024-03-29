import React, {useState} from "react";

export default function Form({ editTodo, onSubmit, defaultMessage }) {
  const [message, setMessage] = useState(editTodo?.title ?? defaultMessage);

  function onFormSubmit(e) {
    e.preventDefault();

    const newTodo = {
      status: false,
      ...editTodo,
      title: message,
    };

    onSubmit(newTodo);
    setMessage('');
  }

  function onMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        value={message}
        onChange={onMessageChange}
        type="text"
        placeholder="Enter message"
      />
      <button>Send</button>
    </form>
  );
}
