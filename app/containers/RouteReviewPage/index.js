/**
 *
 * RouteReviewPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRouteReviewPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import LocationCarousel from 'components/LocationCarousel';
import PageSection from 'components/PageSection';
import RouteCardSmall from 'components/routecards/RouteCardSmall';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import ScheduleTripBox from 'components/ScheduleTripBox';
import BlueBox from 'components/BlueBox';
import Stars from 'components/Stars';

export class RouteReviewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {

    //this is just for the blue button, will have to change for upload or submitting
    const offer = {
      price: '$1300',
      duration: '4 day trip',
    };

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col" />
            <div className="col-md-8 px-0">
              <div className="container">
                <Header />

                {/*Write report*/}
                <PageSection title="Write a Trip Report">
                  <BorderBottomDiv className="pb-2">  
                  </BorderBottomDiv>
                </PageSection>

                {/*Location section, need to downsize & add new container w/ locations*/}
                <PageSection title="Location">
                  <BorderBottomDiv className="pb-2">  
                  </BorderBottomDiv>
                </PageSection>

                {/*Rating */}
                <PageSection title="Rating">
                  <Stars className="d-inline-block pl-2" value={0.0} editable={true} /> 
                  <BorderBottomDiv className="pb-2">  
                  </BorderBottomDiv>
                </PageSection>

                {/*Report */}
                <PageSection title="Report">
                  <BorderBottomDiv className="pb-2">  
                  </BorderBottomDiv>
                </PageSection>

                {/*Beta*/}
                <PageSection title="Beta">
                  <BorderBottomDiv className="pb-2">  
                  </BorderBottomDiv>
                </PageSection>

                {/*Add Photo/Video */}
                <PageSection title="Add Photo/Video">
                  <BorderBottomDiv className="pb-2">  
                  </BorderBottomDiv>
                </PageSection>

                <BlueBox  />
              </div>
              
              
            </div>
            <div className="col" />
          </div>

          
        </div>
      </div>
    );
  }
}

RouteReviewPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  routereviewpage: makeSelectRouteReviewPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'routeReviewPage', reducer });
const withSaga = injectSaga({ key: 'routeReviewPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RouteReviewPage);
