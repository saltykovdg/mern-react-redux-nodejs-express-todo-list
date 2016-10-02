import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import TodoListItem from '../../components/TodoListItem/TodoListItem';
import { mountWithIntl, shallowWithIntl } from '../../../../util/react-intl-test-helper';
import { FormattedMessage } from 'react-intl';

const todo = { text: 'test1', completed: true, cuid: '57ebb7264363d32380e94356' };
const props = {
  todo,
  onComplete: () => {},
};

test('renders properly', t => {
  const wrapper = shallowWithIntl(<TodoListItem {...props} />);
  t.truthy(wrapper.hasClass('li_style'));
  t.truthy(wrapper.find('button').find('.btn .btn-link .btn-xs').containsMatchingElement(<FormattedMessage id="todoToggleStatus" />));
  t.truthy(wrapper.find('.done_true').containsMatchingElement(todo.text));
});


test('has correct props', t => {
  const wrapper = mountWithIntl(<TodoListItem {...props} />);
  t.deepEqual(wrapper.prop('todo'), props.todo);
  t.is(wrapper.prop('onClick'), props.onClick);
  t.is(wrapper.prop('onComplete'), props.onComplete);
});

test('calls onComplete', t => {
  const onComplete = sinon.spy();
  const wrapper = shallowWithIntl(
    <TodoListItem todo={todo} onComplete={onComplete} />
  );
  wrapper.find('.btn .btn-link .btn-xs').first().simulate('click');
  t.truthy(onComplete.calledOnce);
});
