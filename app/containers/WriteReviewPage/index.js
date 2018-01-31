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
import 'react-select/dist/react-select.css';
import { locationList, selectedLocationChange } from "./actions";


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { selectLocationList, selectSelectedLocationId } from './selectors';
import reducer from './reducer';
import saga from './saga';

import Select from 'react-select';
import Header from 'components/Header'
import PageSection from 'components/PageSection';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import Stars from 'components/Stars';


export class WriteReviewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.requestLocationList();
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(selectedOption)
    console.log(`Selected: ${selectedOption.label}`);
  };

  render() {

    const locationOptions = this.props.locationList.map((location) => ({
      value: location.id,
      label: location.title,
    }));


    return (
      <div>
        {/*<Helmet>*/}
        {/*<title>LocationPage</title>*/}
        {/*<meta name="description" content="Description of LocationPage"/>*/}
        {/*</Helmet>*/}

        <div className="container">

          <div className="row">
            <div className="col-lg-7 px-0">

              <Header/>
              <PageSection title="Write a Trip Report">
                <BorderBottomDiv className="pb-2"/>
              </PageSection>

              {/*<h1> {this.props.locationList} </h1>*/}
              <form>

                {/*Location section, need to downsize & add new container w/ locations*/}
                <PageSection title="Location">
                  <BorderBottomDiv className="pb-2">
                    <Select
                      name="form-field-name"
                      value={this.props.selectedLocationId}
                      onChange={this.props.handleSelectedLocationChange}
                      options={locationOptions}
                    />
                  </BorderBottomDiv>
                </PageSection>

                {/*Rating */}
                <PageSection title="Rating">
                  <Stars className="d-inline-block pl-2" value={0.0} editable={true}/>
                  <BorderBottomDiv className="pb-2"/>
                </PageSection>

                {/*Report */}
                <PageSection title="Report">
                  <input type="text" className="form-control" placeholder="Write youre experience here" aria-describedby="basic-addon2"/>
                  <BorderBottomDiv className="pb-2"/>
                </PageSection>

                {/*Beta*/}
                <PageSection title="Beta">
                  <BorderBottomDiv className="pb-2"/>
                </PageSection>

                {/*Add Photo/Video */}
                <PageSection title="Add Photo/Video">
                  <BorderBottomDiv className="pb-2">
                  </BorderBottomDiv>
                </PageSection>

                <button type="button" className="btn btn-primary btn-block">Submit</button>
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
  selectedLocationId: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  locationList: selectLocationList(),
  selectedLocationId: selectSelectedLocationId(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestLocationList: () => dispatch(locationList()),
    handleSelectedLocationChange: (selectedOption) => dispatch(selectedLocationChange(selectedOption))
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
