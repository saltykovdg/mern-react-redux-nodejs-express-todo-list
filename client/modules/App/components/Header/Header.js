import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

export function Header(props, context) {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <FormattedMessage id="siteTitle" />
          </Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className={context.router.isActive('/', true) ? 'active' : ''}>
              <Link to="/">
                <FormattedMessage id="headerLinkMain" />
              </Link>
            </li>
            <li className={context.router.isActive('/todos', true) ? 'active' : ''}>
              <Link to="/todos">
                <FormattedMessage id="headerLinkTodo" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default Header;
