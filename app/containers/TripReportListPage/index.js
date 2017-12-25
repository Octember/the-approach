/**
 *
 * TripReportListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

export class TripReportListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>TripReportListPage</title>
          <meta name="description" content="Description of TripReportListPage" />
        </Helmet>
      </div>
    );
  }
}

TripReportListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);
const withSaga = injectSaga({ key: 'tripReportListPage', saga });

export default compose(
  withSaga,
  withConnect,
)(TripReportListPage);
