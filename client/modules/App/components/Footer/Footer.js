import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

export function Footer(props) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang =>
      <button
        className={lang === props.intl.locale ? `button btn-link ${styles.selected}` : 'button btn-link'}
        key={lang} onClick={() => props.switchLanguage(lang)}
      >
        {lang}
      </button>
  );

  return (
    <footer>
      <p className="navbar-text">
        <FormattedMessage id="footerText" />
      </p>
      <p className="navbar-text pull-right">
        {props.intl.messages.switchLanguage}
        {languageNodes}
      </p>
    </footer>
  );
}

Footer.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Footer;
