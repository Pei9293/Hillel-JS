export const ACTION_TODO_DELETE = 'remove';
export const ACTION_TODO_EDIT = 'edit';
export const ACTION_TODO_STATUS_CHANGE = 'statusChange'
export const ACTION_TODO_ADD_TODO = 'addTodo'

export function remove(id) {
  return { type: ACTION_TODO_DELETE, payload: id };
}

export function edit(id) {
  return {type: ACTION_TODO_EDIT, payload: id};
}

export function statusChange(id) {
  return {type: ACTION_TODO_STATUS_CHANGE, payload: id}
}

export function addTodo() {
  return {type: ACTION_TODO_ADD_TODO, payload: ''}
}