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

import { locationList, guideList, selectedLocationChange } from './actions';
import { selectLocationList, selectGuideList, selectSelectedLocationId } from './selectors';
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
    this.handleSubmit = this.handleSubmit.bind(this);

    // State should contain form data for easy validation and submit.
    this.state = {
      // Should figure out a way to pass selectedId props based on a review page we're on
      selectedLocationId: props.selectedLocationId ? props.selectedLocationId : null,
      tripRating: 0,
      details: '',
      selectedGuideId: props.selectedGuideId ? props.selectedGuideId : null,
      guideRating: 0,
    }
  }

  componentDidMount() {
    // API call
    this.props.requestLocationList();
  }

  handleDetailsChange = (e) => { this.setState({ details: e.target.value }); };

  // This function is passed to GuideReviewCard component
  handleConfirmGuided = () => {
    // API call
    this.props.requestGuideList();
  }

  // This function is passed to GuideReviewCard component
  handleSelectGuideId = (guide) => {
    if(guide) {
      this.setState({ selectedGuideId: guide.value});
    }
    else {
      this.setState({ selectedGuideId: null });
    }
  }

  handleSubmit(event) {
    const form = event.target
    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }

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
                    NOTE(AK): I would suggest keeping user-selected values (e.g., selectedLocationId) in the component's state.
                      Since this is a form component, it should be OK to store user-input data in its state,
                      and that will probably make it easier to validate on submit (and even before submitting).
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
                  <Stars className="d-inline-block pl-2" value={0.0} size={50} editable />
                  <BorderBottomDiv className="pb-0" />
                </PageSection>

                {/* Report */}
                <PageSection title="Report">
                  <input type="text" className="form-control"
                  placeholder="Write your experience here"
                  value={this.state.details}
                  onChange={this.handleDetailsChange}
                  required
                />
                  <BorderBottomDiv className="pb-2" />
                </PageSection>

                {/* Guide Review
                  Depending on type of review page, we can pass certain props (like if we already know the guide)
                */}
                <GuideReviewCard
                  isGuided={Boolean(this.state.selectedGuideId || guideOptions.length)}
                  getGuideList={this.handleConfirmGuided}
                  guideOptions={guideOptions}
                  handleSelectGuide={this.handleSelectGuideId}
                  selectedGuideId={this.state.selectedGuideId}
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
  guideList: PropTypes.array,

  // Functions from mapDispatchToProps
  requestLocationList: PropTypes.func,
  requestGuideList: PropTypes.func,
  handleSelectedLocationChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  locationList: selectLocationList(),
  selectedLocationId: selectSelectedLocationId(),
  guideList: selectGuideList(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestLocationList: () => dispatch(locationList()),
    requestGuideList: () => dispatch(guideList()),
    handleSelectedLocationChange: (selectedOption) => dispatch(selectedLocationChange(selectedOption)),
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
