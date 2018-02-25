/**
 *
 * WriteReviewPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import * as actions from './actions';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';

import Helmet from 'react-helmet'

import Header from 'components/Header';
import PageSection from 'components/PageSection';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import Select from 'components/Select';
import Stars from 'components/Stars';
import GuideReviewCard from './GuideReviewCard';

export class WriteReviewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestLocationList();
  }

  componentWillReceiveProps(nextProps) {
    // Reset trip rating if selected location changes
    if(nextProps.selectedLocationId !== this.props.selectedLocationId) {
      this.props.handleTripRatingChange(null);
    }
  }

  /***** Custom Methods *****/

  handleSubmit = (event) => {
    const form = event.target
    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }
  /***** End Custom Methods *****/

  render() {
    const locationOptions = this.props.locationList.map((location) => ({
      value: location.id,
      label: location.title,
    }));

    const guideOptions = this.props.guideList.map((guide) => ({
      value: guide.guide.id,
      label: guide.guide.name,
    }));

    const selectedLocation = this.props.locationList.find((location) => location.id === this.props.selectedLocationId);

    const selectedLocationHeader = selectedLocation ? (
      <div>
        <small>{selectedLocation.regionName}</small>
        <h2>{selectedLocation.title}</h2>
      </div>) : '';

    return (
      <div>
        {
          <Helmet>
          <title>Trip Report</title>
          <meta name="description" content="Trip Report form"/>
          </Helmet>
        }

        <div className="container">
          <Header />

          <div className="row">
            <div className="col-lg-7 px-0">
              <PageSection title="Write a Trip Report">
                <BorderBottomDiv className="pb-2" />
              </PageSection>

              <form className="needs-validation" onSubmit={this.handleSubmit} noValidate>

                <BorderBottomDiv className="pb-2">
                  <label htmlFor="locationSelection"><h4 className="font-weight-bold px-2">Location</h4></label>
                  {selectedLocationHeader}

                  {/*
                    TODO: How to validate react-select stuff???
                  */}
                  <Select
                    name="form-field-name"
                    id="locationSelection"
                    value={this.props.selectedLocationId}
                    onChange={this.props.handleSelectedLocationChange}
                    options={locationOptions}
                  />

                </BorderBottomDiv>

                {/* Rating */}
                <PageSection title="Rating">
                  <Stars
                    className="pl-2"
                    value={this.props.tripRating !== null ? this.props.tripRating : 0}
                    size={50}
                    editable={Boolean(this.props.selectedLocationId)}
                    handleRatingChange={this.props.handleTripRatingChange}
                  />
                  <BorderBottomDiv className="pb-0" />
                </PageSection>

                {/* Report */}
                <PageSection title="Report">
                  <input type="text" className="form-control"
                  placeholder="Write your experience here"
                  value={this.props.tripReportDetails}
                  onChange={this.props.handleDetailsChange}
                  required
                />
                  <BorderBottomDiv className="pb-2" />
                </PageSection>

                {/* Guide Review
                  Depending on type of review page, we can pass certain props (like if we already know the guide)
                */}
                <GuideReviewCard
                  isGuided={this.props.isGuided}
                  guideOptions={guideOptions}
                  selectedGuideId={this.props.selectedGuideId}
                  guideRatingValue={this.props.guideRating !== null ? this.props.guideRating : 0}
                  // Handlers
                  handleIsGuided={this.props.toggleIsGuided}
                  getGuideList={this.props.requestGuideList}
                  handleSelectGuide={this.props.handleSelectedGuideChange}
                  ratingHandler={this.props.handleGuideRatingChange}
                />

                {/* Add Photo/Video */}
                <PageSection title="Add Photo/Video">
                  <BorderBottomDiv className="pb-2">
                  </BorderBottomDiv>
                </PageSection>

                <button type="submit" className="btn btn-lg btn-primary btn-block" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WriteReviewPage.propTypes = {
  // Props from mapStateToProps
  locationList: PropTypes.array,
  selectedLocationId: PropTypes.number,

  tripRating: PropTypes.number,
  tripReportDetails: PropTypes.string,

  isGuided: PropTypes.bool,
  guideList: PropTypes.array,
  selectedGuideId: PropTypes.number,
  guideRating: PropTypes.number,

  // Methods from mapDispatchToProps
  requestLocationList: PropTypes.func,
  handleSelectedLocationChange: PropTypes.func,

  toggleIsGuided: PropTypes.func,
  requestGuideList: PropTypes.func,
  handleSelectedGuideChange: PropTypes.func,

  handleTripRatingChange: PropTypes.func,

  handleDetailsChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  locationList: selectors.selectLocationList(),
  selectedLocationId: selectors.selectSelectedLocationId(),

  isGuided: selectors.selectIsGuided(),
  guideList: selectors.selectGuideList(),
  selectedGuideId: selectors.selectSelectedGuideId(),

  tripRating: selectors.selectTripRating(),
  guideRating: selectors.selectGuideRating(),

  tripReportDetails: selectors.selectTripReportDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    // Location
    requestLocationList: () => dispatch(actions.locationList()),
    handleSelectedLocationChange: (selectedOption) => dispatch(actions.selectedLocationChange(selectedOption)),
    // Guide
    toggleIsGuided: (toggleValue) => dispatch(actions.isGuidedToggleChange(toggleValue)),
    requestGuideList: () => dispatch(actions.guideList()),
    handleSelectedGuideChange: (selectedOption) => dispatch(actions.selectedGuideChange(selectedOption)),
    // Ratings
    handleTripRatingChange: (tripRating) => dispatch(actions.selectTripRatingChange(tripRating)),
    handleGuideRatingChange: (guideRating) => dispatch(actions.selectGuideRatingChange(guideRating)),
    // Other
    handleDetailsChange: (textChangeEvent) => dispatch(actions.updateTripReportDetailsOnChange(textChangeEvent)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'WriteReviewPage', reducer });
const withSaga = injectSaga({ key: 'WriteReviewPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WriteReviewPage);
