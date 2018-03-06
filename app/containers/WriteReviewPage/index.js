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
import * as constants from './constants';
import reducer from './reducer';
import saga from './saga';

import Helmet from 'react-helmet'

import Header from 'components/Header';
import PageSection from 'components/PageSection';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import Select from 'components/Select';
import Stars from 'components/Stars';
import GuideReviewCard from './GuideReviewCard';
import Auth from 'services/auth/Auth';

export class WriteReviewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.auth = new Auth();
  }

  componentDidMount() {
    this.props.requestLocationList();
  }

  componentWillReceiveProps(nextProps) {
    // Reset trip rating if selected location changes
    if (nextProps.selectedLocationId !== this.props.selectedLocationId) {
      this.props.handleTripRatingChange(null);
    }
  }

  /***** Custom Methods *****/

  // Custom validation rules, not handled by form classes
  formSubmissionIsValid = () => {
    return this.props.selectedLocationId && !(this.props.isGuided && !this.props.selectedGuideId);
  };

  validateForm = (form) => {
    let valid = true

    if (!this.auth.isAuthenticated()) {
      // if not authenticated, show the signin modal
      // TODO - this should be redux-driven. Migrate sign in modal to a container, with show and hide actions
      $('#signin-modal').modal('show');
      valid = false;
    } else {
      // form validation
      if (form.checkValidity() === false) {
        console.log('HTML validation error');
        form.classList.add('was-validated');
        valid = false;
      }
      if (!this.formSubmissionIsValid()) {
        // apply custom validation styles
        console.log('custom frontend validation error');
        this.props.handleCustomValidationFailed();
        valid = false;
      }
    }
    return valid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const valid = this.validateForm(event.target);

    if (valid) {
      console.log('form submission block');
      // submit =>
      //    onSuccess => redirect somewhere, show some message
      //    onFailure => if validation error, reflect it to user
    }
  };

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

    const locationSelectClassName = (this.props.customValidationFailed && !this.props.selectedLocationId) ?
      constants.CUSTOM_VALIDATION_CLASS :
      '';

    const guideSelectClassName = 'my-2 ' + ((this.props.customValidationFailed && this.props.isGuided && !this.props.selectedGuideId) ?
      constants.CUSTOM_VALIDATION_CLASS :
      '');

    return (
      <div>
        {
          <Helmet>
            <title>Trip Report</title>
            <meta name="description" content="Trip Report form" />
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
                  <Select
                    name="form-field-name"
                    id="locationSelection"
                    value={this.props.selectedLocationId}
                    onChange={this.props.handleSelectedLocationChange}
                    options={locationOptions}
                    className={locationSelectClassName}
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
                  <input
                    type="text"
                    className="form-control"
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
                  selectClassName={guideSelectClassName}
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
  toggleIsGuided: PropTypes.func,
  requestGuideList: PropTypes.func,

  handleSelectedLocationChange: PropTypes.func,
  handleGuideRatingChange: PropTypes.func,
  handleSelectedGuideChange: PropTypes.func,
  handleTripRatingChange: PropTypes.func,
  handleDetailsChange: PropTypes.func,

  handleCustomValidationFailed: PropTypes.func,
  customValidationFailed: PropTypes.bool,
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
  customValidationFailed: selectors.selectCustomValidationFailed(),
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
    handleCustomValidationFailed: () => dispatch(actions.customValidationFailed()),
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
