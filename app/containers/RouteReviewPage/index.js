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

import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import LocationCarousel from 'components/LocationCarousel';
import PageSection from 'components/PageSection';
import RouteCardSmall from 'components/routecards/RouteCardSmall';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import ScheduleTripBox from 'components/ScheduleTripBox';

export class RouteReviewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col" />
            <div className="col-md-8 px-0">
              <div className="container">
                <Header />
                <Breadcrumbs breadcrumbData={[{ link: 'google.com', text: 'Denali National Park' }]} />
              </div>
            </div>
            <div className="col" />
          </div>

          <div className="row">
            testststst
          </div>
        </div>
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
