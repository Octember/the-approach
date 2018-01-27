/**
 *
 * TripDetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {makeSelectTripDetailPage, selectGuideDataForOfferDetail,selectTripForOfferDetail, selectLocationDataForOfferDetail} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadTripPage } from './actions';
import { TRIP_DOMAIN } from './constants'

import Header from 'components/Header'
import GuideHero from 'components/GuideHero';
import GuideDescriptionCard from 'components/GuideDescriptionCard';
import ScheduleTripBox from 'components/ScheduleTripBox';
import { LocationCarouselDesktop, LocationCarouselMobile } from 'components/LocationCarousel';
import LocationHeader from 'components/LocationHeader';
import OfferScheduleBox from 'components/OfferScheduleBox';
import PageSection from "../../components/PageSection";
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import GuideCard from 'components/GuideCard';
import AvailabilityBox from 'components/AvailabilityBox';
import { selectImagesFromLocation } from "../LocationPage/selectors";

export class TripDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const tripId = this.props.match.params.tripId ? this.props.match.params.tripId : 1;

    this.props.requestOfferPage(tripId);
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
          <title>TripDetailPage</title>
          <meta name="description" content="Description of TripDetailPage" />
        </Helmet>

        <div className="container">
          <Header />

          <div className="row">
            <div className="col-lg-7 px-0">

              <div className="d-lg-none">
                {/* Mobile/tablet view */}
                <LocationCarouselMobile
                  title={this.props.trip.heading}
                  metadata={metadata}
                  images={this.props.locationData.images}
                  rating={5}
                />

              </div>

              <BorderBottomDiv className="d-none d-lg-block">
                {/* Desktop only */}
                <LocationHeader title={this.props.trip.heading} rating={5} metadata={metadata} />
              </BorderBottomDiv>

              <div className="px-2">

                <PageSection title="Guides">
                  <BorderBottomDiv className="pb-2">
                    <GuideDescriptionCard className="ml-3" guide={this.props.guide} />
                  </BorderBottomDiv>
                </PageSection>

                <PageSection title="Description">
                  <BorderBottomDiv className="pb-2">
                    <div className="ml-3">
                      {'todo'}
                    </div>
                  </BorderBottomDiv>
                </PageSection>

                <div className="d-lg-none">
                  {/* Mobile/tablet view */}
                  <OfferScheduleBox className="m-2" />
                </div>

                <PageSection title="Itinerary">
                  <BorderBottomDiv className="pb-2">
                    <div className="ml-3">
                      {this.props.trip.itinerary}
                    </div>
                  </BorderBottomDiv>
                </PageSection>

                <PageSection title="Availability">
                  <BorderBottomDiv className="pb-2">
                    <AvailabilityBox />
                  </BorderBottomDiv>
                </PageSection>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              {/* Desktop sidebar */}
              <LocationCarouselDesktop
                title={'Crevasse Rescue Course'}
                metadata={metadata}
                images={this.props.locationData.images}
                desktopView={true}
              />
              <OfferScheduleBox className="m-2" />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

TripDetailPage.propTypes = {
  requestOfferPage: PropTypes.func,
  guide: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  guide: selectGuideDataForOfferDetail(),
  trip: selectTripForOfferDetail(),
  locationData: selectLocationDataForOfferDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestOfferPage: (tripId) => {
      dispatch(loadTripPage(tripId));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: TRIP_DOMAIN, reducer });
const withSaga = injectSaga({ key: TRIP_DOMAIN, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TripDetailPage);
