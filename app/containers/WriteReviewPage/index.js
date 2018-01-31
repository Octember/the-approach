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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectWriteReviewPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Header from 'components/Header'
import PageSection from 'components/PageSection';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import Stars from 'components/Stars';

export class WriteReviewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    // this is just for the blue button, will have to change for upload or submitting
    const offer = {
      price: '$1300',
      duration: '4 day trip',
    };

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col"/>
            <div className="col-md-8 px-0">
              <div className="container">
                <Header/>
                {/*Write report*/}
                <PageSection title="Write a Trip Report">
                  <BorderBottomDiv className="pb-2"/>
                </PageSection>
                {/*Location section, need to downsize & add new container w/ locations*/}
                <PageSection title="Location">
                  <BorderBottomDiv className="pb-2">
                  </BorderBottomDiv>
                </PageSection>

                {/*Rating */}
                <PageSection title="Rating">
                  <Stars className="d-inline-block pl-2" value={0.0} editable={true} />
                  <BorderBottomDiv className="pb-2" />
                </PageSection>

                {/*Report */}
                <PageSection title="Report">
                  <input type="text" className="form-control" placeholder="Write youre experience here" aria-describedby="basic-addon2"/>
                  <BorderBottomDiv className="pb-2" />
                </PageSection>

                {/*Beta*/}
                <PageSection title="Beta">
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                  <BorderBottomDiv className="pb-2">

                  </BorderBottomDiv>
                </PageSection>

                {/*Add Photo/Video */}
                <PageSection title="Add Photo/Video">
                  <BorderBottomDiv className="pb-2">
                  </BorderBottomDiv>
                </PageSection>

                <button type="button" className="btn btn-primary btn-block">Submit</button>
              </div>
            </div>
            <div className="col" />
          </div>
        </div>
      </div>
    );
  }
}

WriteReviewPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  WriteReviewPage: makeSelectWriteReviewPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
