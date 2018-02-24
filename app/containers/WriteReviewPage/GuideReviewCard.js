import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'components/Select';

import PageSection from 'components/PageSection';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import Stars from 'components/Stars';

class GuideReviewCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Grab guide list immediately (API call) if somehow we know it's guided but there's no guide selected.
    if(this.props.isGuided && (this.props.selectedGuideId !== null)) {
      this.props.getGuideList();
    }
  }

  componentWillReceiveProps(nextProps) {
    // Do another API call if, somehow, the options array's length changes
    if(this.props.guideOptions.length && (nextProps.guideOptions.length !== this.props.guideOptions.length)) {
      this.props.getGuideList();
    }

    // Reset rating if guide status changes
    if((nextProps.selectedGuideId !== this.props.selectedGuideId) || (nextProps.isGuided !== this.props.isGuided)) {
      this.props.ratingHandler(null);
    }
  }

  handleButtonClick = (e) => {
    // There are edge cases where clicking on the edge of a button can give undefined value
    const isGuided = e.target.firstChild.value ? e.target.firstChild.value === "guided" : this.props.isGuided;

    this.props.handleIsGuided(isGuided);  // Action function passed from WriteReviewPage container

    // If "No" is selected, clear the Select component (this disables and resets the rating as well)
    if(!isGuided) {
      this.props.handleSelectGuide(null);
    }
    else if(!this.props.guideOptions.length) {
      // Do API call if "Yes" is selected and options array is currently empty
      this.props.getGuideList();
    }
  }

  render() {
    return (
      <PageSection title="Was the trip guided?">
        {/* Yes/No buttons */}
        <div className="btn-group-md btn-group-toggle d-flex mx-3" data-toggle="buttons" onClick={this.handleButtonClick}>
          <label className="btn btn-block mr-3 btn-outline-primary">
            <input type="radio" value="guided" autoComplete="off" />
            Yes
          </label>
          <label className="btn btn-block mt-0 btn-outline-secondary">
            <input type="radio" value="notGuided" autoComplete="off"/>
            No
          </label>
        </div>
        {/* Guide-list dropdown menu */}
        <Select className="my-2"
          disabled={!this.props.isGuided}
          required={this.props.isGuided}
          value={this.props.selectedGuideId}
          onChange={this.props.handleSelectGuide}
          options={this.props.guideOptions}
          clearable={true}
        />
        {/* Rate using Stars component */}
        <div className="d-flex flex-row justify-content-around">
          <label className={"d-flex align-self-center mb-0 " + (this.props.selectedGuideId !== null ? "" : "text-secondary")}>
            Rate your guide:
          </label>
          <Stars
            size={35}
            editable={Boolean(this.props.selectedGuideId)}
            value={this.props.guideRatingValue}
            handleRatingChange={this.props.ratingHandler}
          />
        </div>
        <BorderBottomDiv className="pb-2" />
      </PageSection>
    )
  }
}

GuideReviewCard.propTypes = {
  isGuided: PropTypes.bool,
  selectedGuideId: PropTypes.number,
  guideOptions: PropTypes.arrayOf(PropTypes.shape(
    { value: PropTypes.number, label: PropTypes.string }
  )),

  getGuideList: PropTypes.func.isRequired,  // Selector from parent container that does API call

  // Handlers
  handleIsGuided: PropTypes.func.isRequired,
  handleSelectGuide: PropTypes.func.isRequired,
  ratingHandler: PropTypes.func.isRequired,
};

GuideReviewCard.defaultProps = {
  isGuided: false,
  selectedGuideId: null,
  guideOptions: [],
};

export default GuideReviewCard;
