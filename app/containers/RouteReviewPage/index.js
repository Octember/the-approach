/**
 *
 * RouteReviewPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRouteReviewPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class RouteReviewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

RouteReviewPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  routereviewpage: makeSelectRouteReviewPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'routeReviewPage', reducer });
const withSaga = injectSaga({ key: 'routeReviewPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RouteReviewPage);
