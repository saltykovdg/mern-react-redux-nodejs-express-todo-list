import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import TodoList from '../../components/TodoList';

const todos = [
  { text: 'test1', completed: false, cuid: '57ebb7264363d32380e94356' },
  { text: 'test2', completed: false, cuid: '57ebb72a4363d32380e94357' },
];

test('renders the list', t => {
  const wrapper = shallow(
    <TodoList todos={todos} handleCompleteTodo={() => {}} />
  );
  t.is(wrapper.find('TodoListItem').length, 2);
});
