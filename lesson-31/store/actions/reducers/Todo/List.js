import React from "react";
import {useDispatch} from "react-redux";
import {remove, edit, statusChange, addTodo} from "../store/actions/todo";

export default function List({ todos, onEdit }) {
  const dispatch = useDispatch();

  function onTodoCkick(todo) {
    dispatch(statusChange(todo.id))
  }

  function onEditClick(e, todo) {
    e.stopPropagation();

    dispatch(edit(todo.id));
  }

  function onDeleteClick(e, todo) {
    e.stopPropagation();

    dispatch(remove(todo.id));
  }

  function onAddBtnClick(e) {
    e.stopPropagation();
    dispatch(addTodo())
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
          onClick={e => onTodoCkick(todo)}
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
      <button onClick={e => onAddBtnClick(e)}>add new ToDo</button>
    </ul>
  );
}