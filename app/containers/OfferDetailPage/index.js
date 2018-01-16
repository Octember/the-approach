/**
 *
 * OfferDetailPage
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
import makeSelectOfferDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import GuideHero from 'components/GuideHero';
import ScheduleTripBox from 'components/ScheduleTripBox';
import PageSection from "../../components/PageSection";
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import GuideCard from 'components/GuideCard';

export class OfferDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focused: true,
    };
  }


  render() {
    const offer = {
      price: '$1300',
      duration: '4 day trip',
    };

    return (
      <div>
        <Helmet>
          <title>OfferDetailPage</title>
          <meta name="description" content="Description of OfferDetailPage" />
        </Helmet>

        <div className="container">
          <Header />

          <div className="row">
            <div className="col-lg-7 px-0">


            <BorderBottomDiv>
              <GuideHero />
            </BorderBottomDiv>

            <PageSection>
              <BorderBottomDiv>
                <ScheduleTripBox {...offer} />
              </BorderBottomDiv>
            </PageSection>

            <PageSection title="Itinerary">
              <BorderBottomDiv className="pb-2">
                {/*<ShowMore>*/}
                  3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                {/*</ShowMore>*/}
              </BorderBottomDiv>
            </PageSection>

            <PageSection title="Guides">
              <GuideCard />
              <GuideCard />
              <GuideCard />

            </PageSection>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OfferDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  offerdetailpage: makeSelectOfferDetailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'offerDetailPage', reducer });
const withSaga = injectSaga({ key: 'offerDetailPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OfferDetailPage);
