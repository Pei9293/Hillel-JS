import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import useTodo from "./useTodo";


export default function Todo({ defaultMessage, defaultList }) {
  const [editTodo, setEditTodo] = useState();
  const { error, todos, onTodoFormSubmit, onDelete, onStatusChange } = useTodo(defaultList);

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <List
        todos={todos}
        onEdit={setEditTodo}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
      />

      <Form
        key={editTodo?.id}
        editTodo={editTodo}
        onSubmit={onTodoFormSubmit}
        defaultMessage={defaultMessage}
      />
    </>
  )
}