/**
 *
 * LocationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import saga from './saga';
import reducer from './reducer';
import * as selectors from './selectors';
import { loadLocationPage } from './actions';

import Header from 'components/Header';
import { LocationCarouselDesktop, LocationCarouselMobile } from 'components/LocationCarousel';
import PageSection from 'components/PageSection';
import RouteCardSmall from 'components/routecards/RouteCardSmall';
import ScheduleTripBox from 'components/ScheduleTripBox';
import TripReportCard from 'components/TripReportCard';
import SubLocationCard from 'components/SubLocationCard';
import LocationHeader from 'components/LocationHeader';
import Breadcrumbs from 'components/Breadcrumbs';
import GearListCard from 'components/GearListCard';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import StyledSmall from 'components/shared/StyledSmall';

export class LocationPage extends React.Component { // eslint-disable-line react/prefer-stateless-functions

  componentDidMount() {
    const locationId = this.props.match.params.locationId ? this.props.match.params.locationId : 1;

    this.props.requestLocationPage(locationId);
  }

  componentDidUpdate() {
    const newLocationId = this.props.match.params.locationId;

    if (newLocationId !== this.props.currentLocationId) {
      this.props.requestLocationPage(newLocationId);
    }
  }

  render() {
    const metadata = [
      'Alpine Grade II-IIII',
      'Elevation 14,410',
      '0.5 mile approach',
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
                <Breadcrumbs
                  breadcrumbData={[
                    { link: 'google.com', text: 'Mt. Rainier National park' },
                    { link: 'google.com', text: 'chicken butt' },
                  ]}
                />
                <LocationHeader title={this.props.location.title} metadata={metadata} />
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
                  <GearListCard gearListObj={
                    {
                      //Static object because no API yet
                      id: 5,
                      name: 'Glacier Climbing Kit',
                      imageUrl: 'https://images.pexels.com/photos/219837/pexels-photo-219837.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
                    }
                  } />
                  <BorderBottomDiv />
                </PageSection>

                <PageSection title="Routes">
                  {
                    this.props.subLocations.map((data) => (
                      <SubLocationCard {...data} key={data.location.id} />
                    ))
                  }
                  <BorderBottomDiv />
                </PageSection>

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

              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              {/* Desktop sidebar */}
              <LocationCarouselDesktop
                title={this.props.location.title}
                metadata={metadata}
                images={this.props.images}
                desktopView
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
  reviews: PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    requestLocationPage: (locationId) => dispatch(loadLocationPage(locationId)),
  };
}

const mapStateToProps = createStructuredSelector({
  currentLocationId: selectors.selectLocationPageId(),
  images: selectors.selectImagesFromLocation(),
  location: selectors.selectLocationData(),
  subLocations: selectors.selectSubLocationData(),
  reviews: selectors.selectReviews(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'locationPage', reducer });
const withSaga = injectSaga({ key: 'locationPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LocationPage);
