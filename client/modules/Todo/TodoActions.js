import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODOS = 'ADD_TODOS';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const CLEAR_COMPLETED_TODO = 'CLEAR_COMPLETED_TODO';

// Export Actions
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export function addTodos(todos) {
  return { type: ADD_TODOS, todos };
}

export function completeTodo(cuid) {
  return { type: COMPLETE_TODO, cuid };
}

export function clearCompletedTodo() {
  return { type: CLEAR_COMPLETED_TODO };
}

export function addTodoRequest(todo) {
  return (dispatch) => {
    return callApi('todos', 'post', {
      todo: {
        text: todo.text,
      },
    }).then(res => dispatch(addTodo(res.todo)));
  };
}

export function fetchTodos() {
  return (dispatch) => {
    return callApi('todos').then(res => dispatch(addTodos(res.todos)));
  };
}

export function clearCompletedTodoRequest() {
  return (dispatch) => {
    return callApi('todos/delete/completed', 'delete').then(() => dispatch(clearCompletedTodo()));
  };
}

export function completeTodoRequest(cuid) {
  return (dispatch) => {
    return callApi(`todos/${cuid}/complete`, 'post').then(() => dispatch(completeTodo(cuid)));
  };
}
