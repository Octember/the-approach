/**
 *
 * OfferListPage
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
import makeSelectOfferListPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import LocationTitle from 'components/LocationTitle';
import GuideHero from 'components/GuideHero';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';

export class OfferListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>OfferListPage</title>
          <meta name="description" content="Description of OfferListPage" />
        </Helmet>

        <div className="container">
          <div className="row">
            <div className="col" />
            <div className="col-md-8 px-0">
              <div className="container">
                <Header />
                <Breadcrumbs
                  breadcrumbData={[
                    { link: 'google.com', text: 'Mt. Rainier National park' },
                    { link: 'google.com', text: 'chicken butt' },
                  ]}
                />
                <LocationTitle className="mt-0 mb-2" title="Eamon-Winthrop Glacier" rating={5.0} />
              </div>
              <BorderBottomDiv>
                <GuideHero />
              </BorderBottomDiv>
            </div>
            <div className="col" />
          </div>

        </div>
      </div>
    );
  }
}

//https://www.outdoorproject.com/sites/default/files/styles/odp_header_adaptive/public/features/1-21.jpg?itok=YEd1AijH

OfferListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  offerlistpage: makeSelectOfferListPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'offerListPage', reducer });
const withSaga = injectSaga({ key: 'offerListPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OfferListPage);
