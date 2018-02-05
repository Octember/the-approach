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
import Select from 'react-select';
import Header from 'components/Header';
import PageSection from 'components/PageSection';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import Stars from 'components/Stars';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import 'react-select/dist/react-select.css';

import { locationList, selectedLocationChange } from './actions';
import { selectLocationList, selectSelectedLocationId } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class WriteReviewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestLocationList();
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

    const selectedLocation = this.props.locationList.find((location) => location.id === this.props.selectedLocationId);
    // console.log(selectedLocation);

    const selectedLocationHeader = selectedLocation ? (
      <div>
        <small>{selectedLocation.regionName}</small>
        <h2>{selectedLocation.title}</h2>
      </div>) : '';

    return (
      <div>
        {/*<Helmet>*/}
        {/*<title>LocationPage</title>*/}
        {/*<meta name="description" content="Description of LocationPage"/>*/}
        {/*</Helmet>*/}

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

                  {/* TODO: How to validate react-select stuff??? */}
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
                  <Stars className="d-inline-block pl-2" value={0.0} editable />
                  <BorderBottomDiv className="pb-2" />
                </PageSection>

                {/* Report */}
                <PageSection title="Report">
                  <input type="text" className="form-control" placeholder="Write your experience here" required />
                  <BorderBottomDiv className="pb-2" />
                </PageSection>

                {/* Beta */}
                <PageSection title="Beta">
                  <BorderBottomDiv className="pb-2" />
                </PageSection>

                {/* Add Photo/Video */}
                <PageSection title="Add Photo/Video">
                  <BorderBottomDiv className="pb-2">
                  </BorderBottomDiv>
                </PageSection>

                <button type="submit" className="btn btn-primary btn-block" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WriteReviewPage.propTypes = {
  requestLocationList: PropTypes.func,
  handleSelectedLocationChange: PropTypes.func,
  selectedLocationId: PropTypes.number,
  locationList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  locationList: selectLocationList(),
  selectedLocationId: selectSelectedLocationId(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestLocationList: () => dispatch(locationList()),
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
