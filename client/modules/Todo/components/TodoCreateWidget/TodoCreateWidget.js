import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

export class TodoCreateWidget extends Component {
  addTodo = () => {
    const todoTextRef = this.refs.todoText;

    if (todoTextRef.value) {
      this.props.addTodo(todoTextRef.value);
      todoTextRef.value = '';
    }
  };

  clearCompletedTodo = () => {
    this.props.clearCompletedTodo();
  };

  render() {
    return (
      <div className="form-inline">
        <div className="input-group">
          <input type="text" className="form-control" size="50" maxLength="100" placeholder={this.props.intl.messages.addTodoPlaceholder} ref="todoText" />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button" onClick={this.addTodo}>
              <FormattedMessage id="addTodo" />
            </button>
            <button className="btn btn-danger" type="button" onClick={this.clearCompletedTodo}>
              <FormattedMessage id="deleteCompletedTodos" />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

TodoCreateWidget.propTypes = {
  addTodo: PropTypes.func.isRequired,
  clearCompletedTodo: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(TodoCreateWidget);
