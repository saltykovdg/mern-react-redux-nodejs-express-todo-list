import test from 'ava';
import { reducerTest } from 'redux-ava';
import todoReducer, { getTodos } from '../TodoReducer';
import {
  addTodo,
  addTodos,
  completeTodo,
  clearCompletedTodo,
} from '../TodoActions';

const todo1 = { text: 'testTodo1', completed: false, cuid: '57ebb7264363d32380e94356' };
const todo1Completed = { text: 'testTodo1', completed: true, cuid: '57ebb7264363d32380e94356' };
const todo2 = { text: 'testTodo2', completed: false, cuid: '57ebb72a4363d32380e94357' };
const todo3Completed = { text: 'testTodo3', completed: true, cuid: '57ebb7354363d32380e94358' };

test('action for ADD_TODO is working', reducerTest(
  todoReducer,
  { data: [todo1] },
  addTodo(todo2),
  { data: [todo1, todo2] },
));

test('action for ADD_TODOS is working', reducerTest(
  todoReducer,
  { data: [] },
  addTodos([todo1, todo2]),
  { data: [todo1, todo2] },
));

test('action for COMPLETE_TODO is working', reducerTest(
  todoReducer,
  { data: [todo1] },
  completeTodo(todo1.cuid),
  { data: [todo1Completed] },
));

test('action for CLEAR_COMPLETED_TODO is working', reducerTest(
  todoReducer,
  { data: [todo1Completed, todo2, todo3Completed] },
  clearCompletedTodo(),
  { data: [todo2] },
));

test('getTodos selector', t => {
  t.deepEqual(
    getTodos({
      todos: { data: [todo1] },
    }),
    [todo1]
  );
});
