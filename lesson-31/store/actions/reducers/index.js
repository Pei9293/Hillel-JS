import {
  ACTION_COUNTER_DECREMENT,
  ACTION_COUNTER_INCREMENT,
  ACTION_COUNTER_SET
} from "../actions/counter";

import {
  ACTION_TODO_DELETE, 
  ACTION_TODO_EDIT, 
  ACTION_TODO_STATUS_CHANGE, 
  ACTION_TODO_ADD_TODO
} from "../actions/todo";

const INITIAL_STATE = {
  counts: 0,
  loading: false,
  todos: [
    {"title": "default 1", "status": true, "id": "1"},
    {"title": "default 2", "status": false, "id": "2"},
  ],
};

export default function rootReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_COUNTER_SET:
      return { ...state, counts: payload };
    case ACTION_COUNTER_INCREMENT:
      return { ...state, counts: state.counts + 1 };
    case ACTION_COUNTER_DECREMENT:
      return { ...state, counts: state.counts - 1 };
    case ACTION_TODO_DELETE:
      return { ...state, todos: state.todos.filter(todo => todo.id !== payload) };
    case ACTION_TODO_EDIT:
      const editedTodo = state.todos.find(todo => todo.id === payload)
      editedTodo.title = prompt('Edit your goal', editedTodo.title)
      return { ...state, todos: state.todos.map(todoItem => todoItem.id === payload ? editedTodo : todoItem)};
    case ACTION_TODO_STATUS_CHANGE:
      const updatedTodo = state.todos.find(todo => todo.id === payload)
      const status = !(updatedTodo.status);
      updatedTodo.status = status
      return { ...state, todos: state.todos.map(todoItem => todoItem.id === payload ? updatedTodo : todoItem)};
    case ACTION_TODO_ADD_TODO:
      const number = state.todos.length + 1;
      const newTodo = {
        "title": `default ${number}`, "status": false, "id": `${number}`
      };
      state.todos.push(newTodo);
      return {...state, todos: state.todos.map(todo => todo)};
    default:
      return state;
  }
}