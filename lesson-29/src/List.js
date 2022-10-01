import React from "react";

export default function List({ todos, onEdit, onDelete, onStatusChange }) {
  function onEditClick(e, todo) {
    e.stopPropagation();

    onEdit(todo);
  }

  function onDeleteClick(e, todo) {
    e.stopPropagation();

    onDelete(todo.id);
  }

  function onTodoClick(todo) {
    onStatusChange(todo)
  }

  function checkClass(todo) {
    if (todo.status) {
      return 'done'
    }
  }

  return (
    <ul id="todoList">
      {todos.map((todo, i) => (
        <li
          key={todo.id}
          className={checkClass(todo)}
          onClick={e => onTodoClick(todo)}
        >
          {todo.title}
          <button
            className="edit-button"
            onClick={e => onEditClick(e, todo)}
          >Edit</button>
          <button
            className="remove-button"
            onClick={e => onDeleteClick(e, todo)}
          >Delete</button>
        </li>
      ))}
    </ul>
  );
}