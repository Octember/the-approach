/**
 *
 * RouteListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRouteListPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Header from 'components/Header'
import PageSection from 'components/PageSection';
import RouteCardLarge from 'components/routecards/RouteCardLarge';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';

export class RouteListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const routeData = [{
      id: 32131231,
      imageUrl: 'http://www.mountainguides.com/photos/rainier/kautz/kautz19.jpg',
      routeName: 'Kautz Glacier',
      routeStats: {
        grade: '5.9',
        type: 'sport',
        length: '100\'',
        rating: 3.6,
        countRatings: 11,
      },
    },
    {
      id: 131111,
      imageUrl: 'https://www.outsideonline.com/sites/default/files/migrated-images_parent/migrated-images_38/WCMDEV_152189_mt-rainier-1.jpg',
      routeName: 'Route 2',
      routeStats: {
        grade: '5.10a',
        type: 'lead',
        length: '75\'',
        rating: 5.0,
        countRatings: 14,
      },
    }];

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

          <PageSection title="Mt. Rainier Classic Climbs">
            {
              routeData.map((data, i) =>
                <RouteCardLarge {...data} index={i} key={i} />
              )
            }
          </PageSection>


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

const withReducer = injectReducer({key: 'routeListPage', reducer});
const withSaga = injectSaga({key: 'routeListPage', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RouteListPage);
