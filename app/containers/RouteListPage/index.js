/**
 *
 * RouteListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRouteListPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import LocationCarousel from 'components/LocationCarousel';
import PageSection from 'components/PageSection';
import RouteCard from 'components/RouteCard';
import BorderBottomDiv from 'components/Utils';

export class RouteListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>RoutePage</title>
          <meta name="description" content="Description of RoutePage"/>
        </Helmet>

        <div className="container">
          <div className="row">
            <div className="col" />
            <div className="col-md-8 px-0">
              <div className="container">
                <BorderBottomDiv>
                <Header />
                </BorderBottomDiv>
              </div>
            </div>
            <div className="col" />
          </div>
        </div>
      </div>
    );
  }
}

RouteListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  routelistpage: makeSelectRouteListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'routeListPage', reducer });
const withSaga = injectSaga({ key: 'routeListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RouteListPage);
