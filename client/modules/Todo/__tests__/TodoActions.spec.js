import test from 'ava';
import { actionTest } from 'redux-ava';

import {
  ADD_TODO,
  ADD_TODOS,
  COMPLETE_TODO,
  CLEAR_COMPLETED_TODO,
  addTodo,
  addTodos,
  completeTodo,
  clearCompletedTodo,
} from '../TodoActions';

const todo = { text: 'test1', completed: false, cuid: '57ebb7264363d32380e94356' };

test('should return the correct type for addTodo', actionTest(
  addTodo,
  todo,
  { type: ADD_TODO, todo },
));

test('should return the correct type for addTodos', actionTest(
  addTodos,
  [todo],
  { type: ADD_TODOS, todos: [todo] },
));

test('should return the correct type for completeTodo', actionTest(
  completeTodo,
  todo.cuid,
  { type: COMPLETE_TODO, cuid: todo.cuid },
));

test('should return the correct type for clearCompletedTodo', actionTest(
  clearCompletedTodo,
  null,
  { type: CLEAR_COMPLETED_TODO },
));
