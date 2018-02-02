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
import makeSelectGuideProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Header from 'components/Header';
import ProfileHeader from 'components/ProfileHeader';

const sampleProfile = {
  name: 'RMI Expeditions',
  url: 'http://travelchair.com/images/blockexpeditions.png',
  location: 'Winthrop, WA',
  stats: {
    followers: 5,
    photos: 8,
    adventures: 2,
    tripReports: 1,
  }
}

export class GuideProfilePage extends React.Component {
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
                {/* Currently using dummy profile */}
                <ProfileHeader guide {...sampleProfile} />
              </div>

              <div className="d-none d-lg-block">
                {/* Desktop view */}
                desktop header
              </div>

              <div className="px-2">
                Content here
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  guideProfilePage: makeSelectGuideProfilePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
