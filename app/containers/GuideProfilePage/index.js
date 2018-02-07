/**
 *
 * GuideProfilePage
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
import { selectGuideData, selectIsLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { requestGuideProfile } from './actions';

import Header from 'components/Header';
import ProfileHeader from 'components/ProfileHeader';

export class GuideProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const guideId = this.props.match.params.guideId ? this.props.match.params.guideId : 1;

    this.props.requestGuideProfilePage(guideId);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>GuideProfilePage</title>
          <meta name="description" content="Description of GuideProfilePage" />
        </Helmet>

        <div className="container">
          <Header />

          <div className="row">
            <div className="col-lg-7 px-0">

              <div className="d-lg-none">
                {/* Mobile/tablet view */}
                {
                  this.props.isLoading === false &&
                  <ProfileHeader guide {...this.props.guideData}/>
                }
              </div>

              <div className="d-none d-lg-block">
                {/* Desktop view */}
                {
                  this.props.isLoading === false &&
                  <ProfileHeader guide {...this.props.guideData}/>
                }
              </div>

              <div className="px-2">
                {this.props.guideData.aboutInfo}
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              {/* Desktop sidebar */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GuideProfilePage.propTypes = {
  requestGuideProfilePage: PropTypes.func,
  guideData: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    aboutInfo: PropTypes.string,
    url: PropTypes.string,  // URL for logo image
    photos: PropTypes.array,  // Guide's array of pictures
    adventures: PropTypes.array,  // Guide's array of available planned trips (labelled "Adventures" on page)
    stats: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      count: PropTypes.number,
    })),
  }),
  isLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  guideData: selectGuideData(),
  isLoading: selectIsLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestGuideProfilePage: (guideId) => dispatch(requestGuideProfile(guideId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'guideProfilePage', reducer });
const withSaga = injectSaga({ key: 'guideProfilePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GuideProfilePage);
