import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { TodoCreateWidget } from '../../components/TodoCreateWidget/TodoCreateWidget';
import { mountWithIntl, shallowWithIntl, intl } from '../../../../util/react-intl-test-helper';
import { FormattedMessage } from 'react-intl';

const props = {
  addTodo: () => {},
  clearCompletedTodo: () => {},
  intl,
};

test('renders properly', t => {
  const wrapper = shallowWithIntl(<TodoCreateWidget {...props} />);
  t.truthy(wrapper.hasClass('form-inline'));
  t.is(wrapper.find('input').length, 1);
  t.truthy(wrapper.find('.btn .btn-primary').containsMatchingElement(<FormattedMessage id="addTodo" />));
  t.truthy(wrapper.find('.btn .btn-danger').containsMatchingElement(<FormattedMessage id="deleteCompletedTodos" />));
});

test('has correct props', t => {
  const wrapper = mountWithIntl(<TodoCreateWidget {...props} />);
  t.is(wrapper.prop('addTodo'), props.addTodo);
  t.is(wrapper.prop('clearCompletedTodo'), props.clearCompletedTodo);
});

test('calls addTodo', t => {
  const addTodo = sinon.spy();
  const wrapper = mountWithIntl(
    <TodoCreateWidget addTodo={addTodo} clearCompletedTodo={() => {}} intl={intl} />
  );
  wrapper.ref('todoText').get(0).value = 'test 123 todo';
  wrapper.find('.btn .btn-primary').simulate('click');
  t.truthy(addTodo.calledOnce);
  t.truthy(addTodo.calledWith('test 123 todo'));
});

test('calls clearCompletedTodo', t => {
  const clearCompletedTodo = sinon.spy();
  const wrapper = mountWithIntl(
    <TodoCreateWidget addTodo={() => {}} clearCompletedTodo={clearCompletedTodo} intl={intl} />
  );
  wrapper.find('.btn .btn-danger').simulate('click');
  t.truthy(clearCompletedTodo.calledOnce);
  t.truthy(clearCompletedTodo.calledWith());
});

test('empty form doesn\'t call addTodo', t => {
  const addTodo = sinon.spy();
  const wrapper = mountWithIntl(
    <TodoCreateWidget addTodo={addTodo} clearCompletedTodo={() => {}} intl={intl} />
  );
  wrapper.find('.btn .btn-primary').simulate('click');
  t.falsy(addTodo.called);
});
