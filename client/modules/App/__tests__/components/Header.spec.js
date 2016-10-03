import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import { Header } from '../../components/Header/Header';

test('renders the header properly', t => {
  const router = {
    isActive: sinon.stub().returns(true),
  };
  const wrapper = shallow(
    <Header />, {
      context: {
        router,
      },
    }
  );
  t.is(wrapper.find('nav').length, 1);
  t.is(wrapper.find('Link').length, 3);
  t.truthy(wrapper.find('Link [to="/"]').containsMatchingElement(<FormattedMessage id="siteTitle" />));
  t.truthy(wrapper.find('Link [to="/"]').containsMatchingElement(<FormattedMessage id="headerLinkMain" />));
  t.truthy(wrapper.find('Link [to="/todos"]').containsMatchingElement(<FormattedMessage id="headerLinkTodo" />));
});
