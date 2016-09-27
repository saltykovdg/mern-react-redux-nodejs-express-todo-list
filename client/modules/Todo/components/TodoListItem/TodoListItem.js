import React, { PropTypes } from 'react';

// Import Style
import styles from './TodoListItem.css';

function TodoListItem(props) {
  return (
    <li>
      <label className="checkbox">
        <input type="checkbox" defaultChecked={props.todo.completed} onClick={props.onComplete} />
        <span className={props.todo.completed ? styles.done_true : ''}>{props.todo.text}</span>
      </label>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default TodoListItem;
