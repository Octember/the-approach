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
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import { LocationCarouselDesktop, LocationCarouselMobile } from 'components/LocationCarousel';
import PageSection from 'components/PageSection';
import RouteCardSmall from 'components/routecards/RouteCardSmall';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import ScheduleTripBox from 'components/ScheduleTripBox';
import TripReportCard from 'components/TripReportCard';
import LocationHeader from 'components/LocationHeader';
import Breadcrumbs from 'components/Breadcrumbs';
import { selectImagesFromLocation, selectLocationData, selectSubLocationData, selectReviews } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadLocationPage } from './actions';
import StyledSmall from 'components/shared/StyledSmall';

export class LocationPage extends React.Component { // eslint-disable-line react/prefer-stateless-functions

  componentDidMount() {
    const locationId = this.props.match.params.locationId ? this.props.match.params.locationId : 1;

    this.props.requestLocationPage(locationId);
  }

  render() {
    const metadata = [
      'Alpine Grade II-IIII',
      'Elevation 14,410',
      '0.5 mile approach',
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
          <title>LocationPage</title>
          <meta name="description" content="Description of LocationPage"/>
        </Helmet>

        <div className="container">
          <Header />

          <div className="row">
            <div className="col-lg-7 px-0">

              <div className="d-lg-none">
                {/* Mobile/tablet view */}
                <LocationCarouselMobile title={this.props.location.title} metadata={metadata} images={this.props.images} rating={5} />

                <ScheduleTripBox className="m-2" />
              </div>

              <div className="d-none d-lg-block">
                {/* Desktop view */}
                <Breadcrumbs className=""
                  breadcrumbData={[
                    { link: 'google.com', text: 'Mt. Rainier National park' },
                    { link: 'google.com', text: 'chicken butt' },
                  ]}
                />
                <LocationHeader className="" title={this.props.location.title} metadata={metadata} />
              </div>

              <div className="px-2">
                <PageSection title="Description">
                  <BorderBottomDiv>
                    <p className="ml-3">
                      <StyledSmall>
                        A 10,000 foot glacier climb on the slightly less popular east side of Mount Rainier (originally known as Tahoma). The hike to camp passes through Glacier Basin, site of mining activity up through the 1930's. The route, including the climb up the Inter Glacier, can get icy by late July, increasing the difficulty.
                      </StyledSmall>
                    </p>
                  </BorderBottomDiv>
                </PageSection>

                <PageSection title="Beta">
                  <BorderBottomDiv >
                    <div className="ml-3">
                      {
                        metadata.map((subtitle, i) =>
                          <p key={`item-${i}`} className="mb-1">
                            <StyledSmall>{subtitle}</StyledSmall>
                          </p>
                        )
                      }
                    </div>
                  </BorderBottomDiv>
                </PageSection>

                <PageSection title="Approach">
                  <BorderBottomDiv>
                    <img
                      className="d-block img-fluid w-100 my-2"
                      src="http://www.gitta.info/TopoCart/en/image/act_slope_diagram.gif"
                    />
                  </BorderBottomDiv>
                </PageSection>

                <PageSection title="Gear List">
                  <BorderBottomDiv>
                    Bring climbing shoes or something
                  </BorderBottomDiv>
                </PageSection>

                {/* TODO: sublocations
                  <PageSection title="Sub Locations">
                    {
                      this.props.subLocations.map((data) => (
                        <BorderBottomDiv key={`item-${data.location.id}`}>
                          {data.location.title}
                        </BorderBottomDiv>
                      ))
                    }
                  </PageSection>
                */}

                <PageSection>
                  <div className="d-flex justify-content-between">
                    <h4 className="font-weight-bold px-2">Trip Reports</h4>
                    <Link to="/form">
                      <button type="button" className="btn btn-secondary mr-2">Write a Review</button>
                    </Link>
                  </div>
                  {
                    this.props.reviews.map((data) => (
                      <BorderBottomDiv key={`item-${data.review.id}`}>
                        <TripReportCard {...data} />
                      </BorderBottomDiv>
                    ))
                  }
                </PageSection>

                {/*
                <PageSection title="All Routes">
                  {
                    relatedRouteData.map((data, i) => (
                      <BorderBottomDiv key={`item-${data.id}`}>
                        <RouteCardSmall {...data} index={i} />
                      </BorderBottomDiv>
                    ))
                  }
                </PageSection>
                */}
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              {/* Desktop sidebar */}
              <LocationCarouselDesktop
                title={this.props.location.title}
                metadata={metadata}
                images={this.props.images}
                desktopView={true}
              />

              <ScheduleTripBox className="m-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LocationPage.propTypes = {
  requestLocationPage: PropTypes.func,
  images: PropTypes.array,
  subLocations: PropTypes.array,
  reviews: PropTypes.array
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
  subLocations: selectSubLocationData(),
  reviews: selectReviews(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'locationPage', reducer });
const withSaga = injectSaga({ key: 'locationPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LocationPage);
