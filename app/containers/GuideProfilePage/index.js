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
import { selectGuideData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { requestGuideProfile } from './actions';

import Header from 'components/Header';
import ProfileHeader from 'components/ProfileHeader';

const sampleProfile = {
  name: 'RMI Expeditions',
  url: 'http://travelchair.com/images/blockexpeditions.png',
  location: 'Winthrop, WA',
  stats: [
    { label: 'Followers', count: 4 },
    { label: 'Photos', count: 8 },
    { label: 'Adventures', count: 2 },
    { label: 'Trip Reports', count: 7 },
  ],
}

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
                {/* Currently using dummy profile */}
                <ProfileHeader guide {...sampleProfile} />
              </div>

              <div className="d-none d-lg-block">
                {/* Desktop view */}
                <ProfileHeader guide {...sampleProfile} />
              </div>

              <div className="px-2">
                NAME: {this.props.guideData.name}
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
  }),
};

const mapStateToProps = createStructuredSelector({
  guideData: selectGuideData(),
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
