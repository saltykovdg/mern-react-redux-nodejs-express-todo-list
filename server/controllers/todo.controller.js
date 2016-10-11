import Todo from '../models/todo';
import cuid from 'cuid';

/**
 * Get all todos
 * @param req
 * @param res
 * @returns void
 */
export function getTodos(req, res) {
  Todo.find().sort('-id').exec((err, todos) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todos });
  });
}

/**
 * Save a todo
 * @param req
 * @param res
 * @returns void
 */
export function addTodo(req, res) {
  if (!req.body.todo.text) {
    res.status(403).end();
  }
  const newTodo = new Todo(req.body.todo);
  newTodo.cuid = cuid();
  newTodo.completed = false;
  newTodo.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todo: saved });
  });
}

/**
 * Delete completed todo
 * @param req
 * @param res
 * @returns void
 */
export function deleteCompletedTodo(req, res) {
  Todo.find({ completed: true }).remove().exec((err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).end();
  });
}

/**
 * Complete a todo
 * @param req
 * @param res
 * @returns void
 */
export function completeTodo(req, res) {
  Todo.findOne({ cuid: req.params.cuid }).exec((err, todo) => {
    if (err) {
      res.status(500).send(err);
    }
    const newTodo = new Todo(todo);
    newTodo.completed = !newTodo.completed;
    newTodo.save((errSave, saved) => {
      if (errSave) {
        res.status(500).send(errSave);
      }
      res.json({ todo: saved });
    });
  });
}
