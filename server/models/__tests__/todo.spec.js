import test from 'ava';
import request from 'supertest';
import app from '../../server';
import Todo from '../todo';
import { connectDB, dropDB } from '../../util/test-helpers';

// Initial todos added into test db
const todos = [
  new Todo({ text: 'test1', completed: false, cuid: '57ebb7264363d32380e94356' }),
  new Todo({ text: 'test2', completed: false, cuid: '57ebb72a4363d32380e94357' }),
];

test.beforeEach('connect and add two todo entries', t => {
  connectDB(t, () => {
    Todo.create(todos, err => {
      if (err) t.fail('Unable to create todos');
    });
  });
});

test.afterEach.always(t => {
  dropDB(t);
});

test.serial('Should correctly give number of Todos', async t => {
  t.plan(2);

  const res = await request(app)
    .get('/api/todos')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.deepEqual(todos.length, res.body.todos.length);
});

test.serial('Should correctly add a todo', async t => {
  t.plan(2);

  const res = await request(app)
    .post('/api/todos')
    .send({ todo: { text: 'test3' } })
    .set('Accept', 'application/json');

  t.is(res.status, 200);

  const savedTodo = await Todo.findOne({ text: 'test3' }).exec();
  t.is(savedTodo.text, 'test3');
});

test.serial('Should correctly complete a todo', async t => {
  t.plan(2);

  const todo = new Todo({ text: 'test1', completed: false, cuid: '57ebb7264363d32380e94356' });
  todo.save();

  const res = await request(app)
    .post(`/api/todos/${todo.cuid}/complete`)
    .set('Accept', 'application/json');

  t.is(res.status, 200);

  const queriedTodo = await Todo.findOne({ cuid: todo.cuid }).exec();
  t.is(queriedTodo.completed, true);
});
