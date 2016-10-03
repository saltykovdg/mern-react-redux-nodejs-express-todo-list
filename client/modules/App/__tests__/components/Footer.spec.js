import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { Footer } from '../../components/Footer/Footer';
import { intl } from '../../../../util/react-intl-test-helper';
import { FormattedMessage } from 'react-intl';

const enabledLanguages = ['en', 'ru'];
const intlProp = { ...intl, enabledLanguages };

test('renders the footer properly', t => {
  const wrapper = shallow(
    <Footer switchLanguage={() => {}} intl={intlProp} />
  );
  t.is(wrapper.find('footer').length, 1);
  t.is(wrapper.find('p').length, 2);
  t.is(wrapper.find('button').length, enabledLanguages.length);
  t.truthy(wrapper.find('p').find('.navbar-text').containsMatchingElement(<FormattedMessage id="footerText" />));
});
