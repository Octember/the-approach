/**
 *
 * RoutePage
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
import { makeSelectRoutePage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadRoutePage } from './actions';

import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import LocationCarousel from 'components/LocationCarousel';
import PageSection from 'components/PageSection';
import RouteCardSmall from 'components/routecards/RouteCardSmall';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import ScheduleTripBox from 'components/ScheduleTripBox';

export class RoutePage extends React.Component { // eslint-disable-line react/prefer-stateless-functions

  componentDidMount() {
    console.log(`Route id: ${this.props.match.params.routeId}`);

    this.props.requestRoutePage(this.props.match.params.routeId);
  }

  render() {
    const carouselEntries = [
      {
        title: 'Emmon-Winthrop Glacier',
        metadata: [
          'Alpine Grade II-IIII',
          'Elevation 14,410',
          '0.5 mile approach',
        ],
        imageUrl: 'http://www.backgroundbandit.com/wallpapers/31/700.jpg',
      },
      {
        title: 'Noah is cool',
        metadata: [
          'subtitle 2',
        ],
        imageUrl: 'https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_small/mountains-hero.jpg?1345838509',
      },
      {
        title: 'test',
        metadata: [],
        imageUrl: 'http://media.apps.chicagotribune.com/maptiles/chicago-mask/11/523/759.png',
      },
    ];

    const relatedRouteData = [
      {
        id: 32131231,
        routeName: 'Route 1',
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
        routeName: 'Route 2',
        routeStats: {
          grade: '5.10a',
          type: 'lead',
          length: '75\'',
          rating: 5.0,
          countRatings: 14,
        },
      },
    ];
    return (
      <div>
        <Helmet>
          <title>RoutePage</title>
          <meta name="description" content="Description of RoutePage" />
        </Helmet>

        <div className="container">
          <div className="row">
            <div className="col" />
            <div className="col-md-8 px-0">
              <div className="container">
                <Header />
                <Breadcrumbs breadcrumbData={[{ link: 'google.com', text: 'Denali National Park' }]} />
              </div>
              <LocationCarousel />
            </div>
            <div className="col" />
          </div>

          <PageSection title="Beta">
            <BorderBottomDiv className="ml-1">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                over
                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                consectetur</p>
            </BorderBottomDiv>
          </PageSection>

          <PageSection>
            <BorderBottomDiv>
              <ScheduleTripBox price="$1111" duration="3 day trip" />
            </BorderBottomDiv>
          </PageSection>

          <PageSection title="Approach">
            <BorderBottomDiv className="ml-1">
              <p> go to the route</p>
            </BorderBottomDiv>
          </PageSection>

          <PageSection title="All Routes">
            {
              relatedRouteData.map((data, i) =>
                <BorderBottomDiv className="ml-1" key={`item-${data.id}`}>
                  <RouteCardSmall {...data} index={i} />
                </BorderBottomDiv>
              )
            }
          </PageSection>
        </div>
      </div>
    );
  }
}

RoutePage.propTypes = {
  requestRoutePage: PropTypes.func,
  routepage: PropTypes.any
};


function mapDispatchToProps(dispatch) {
  return {
    requestRoutePage: (routeId) => {
      dispatch(loadRoutePage(routeId));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  // images: selectImagesFromRoute(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'routePage', reducer});
const withSaga = injectSaga({key: 'routePage', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RoutePage);
