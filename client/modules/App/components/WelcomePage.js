import React from 'react';
import { FormattedMessage } from 'react-intl';

export function WelcomePage(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>
          <FormattedMessage id="welcomePageTitle" />
        </h1>
        <p>
          <FormattedMessage id="welcomePageText" />
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
