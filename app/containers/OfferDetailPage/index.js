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

// import ShowMore from 'react-show-more';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


import Header from 'components/Header'
import Breadcrumbs from 'components/Breadcrumbs'
import LocationTitle from 'components/LocationTitle';
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

          <PageSection>
            <BorderBottomDiv>
              <ScheduleTripBox {...offer} />
            </BorderBottomDiv>
          </PageSection>

          <PageSection title="Itinerary">
            <BorderBottomDiv className="pb-2">
              {/*<ShowMore>*/}
                {/*3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.*/}
              {/*</ShowMore>*/}
            </BorderBottomDiv>
          </PageSection>

          <PageSection>
            <DayPickerRangeController
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              isDayHighlighted={moment => moment.day() == 4}
            />
          </PageSection>

          <PageSection title="Guides">
            <GuideCard />
            <GuideCard />
            <GuideCard />

          </PageSection>

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
