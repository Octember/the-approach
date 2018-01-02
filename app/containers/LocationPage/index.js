/**
 *
 * LocationPage
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
import { selectImagesFromLocation, selectLocationData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadLocationPage } from './actions';

import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import LocationCarousel from 'components/LocationCarousel';
import PageSection from 'components/PageSection';
import RouteCardSmall from 'components/routecards/RouteCardSmall';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import ScheduleTripBox from 'components/ScheduleTripBox';

export class LocationPage extends React.Component { // eslint-disable-line react/prefer-stateless-functions

  componentDidMount() {
    console.log(`location id: ${this.props.match.params.locationId}`);

    this.props.requestLocationPage(this.props.match.params.locationId);
  }

  render() {
    const carouselEntries = this.props.images.map((image) => {
      const x = {
        id: image.id.value,
        title: this.props.location.title,
        metadata: [
          'Alpine Grade II-IIII',
          'Elevation 14,410',
          '0.5 mile approach',
        ],
        url: image.url,
      };

      return x;
    });


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
          <title>LocationPage</title>
          <meta name="description" content="Description of LocationPage"/>
        </Helmet>

        <div className="container">
          <div className="row">
            <div className="col"/>
            <div className="col-md-8 px-0">
              <div className="container">
                <Header/>
                <Breadcrumbs breadcrumbData={[{ link: 'google.com', text: 'Denali National Park' }]}/>
              </div>
              <LocationCarousel carouselEntries={carouselEntries}/>
            </div>
            <div className="col"/>
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
              <ScheduleTripBox price="$1111" duration="3 day trip"/>
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
                  <RouteCardSmall {...data} index={i}/>
                </BorderBottomDiv>
              )
            }
          </PageSection>
        </div>
      </div>
    );
  }
}

LocationPage.propTypes = {
  requestLocationPage: PropTypes.func,
  images: PropTypes.array
};


function mapDispatchToProps(dispatch) {
  return {
    requestLocationPage: (locationId) => {
      dispatch(loadLocationPage(locationId));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  images: selectImagesFromLocation(),
  location: selectLocationData(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'locationPage', reducer });
const withSaga = injectSaga({ key: 'locationPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LocationPage);
