import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'components/Select';

import PageSection from 'components/PageSection';
import BorderBottomDiv from 'components/shared/BorderBottomDiv';
import Stars from 'components/Stars';

class GuideReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      isGuided: props.isGuided,
    };
  }

  componentWillMount() {
    if(this.props.isGuided) {
      this.props.getGuideList();  // lifting up state: API call is handled by WriteReviewPage container
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Update if...
    const doUpdate = ((nextState.isGuided !== this.state.isGuided) //...switching between yes/no options (affects disabled status for Select component)
      || (nextProps.guideOptions.length !== this.props.guideOptions.length) //...or guide list is updated (affects Select component's options)
      || (nextProps.selectedGuideId !== this.props.selectedGuideId) //...or a guide is selected (affects Select component and disabled status for Stars component)
    );

    return doUpdate;
  }

  componentWillUpdate(nextProps) {
    // Do another API call if, somehow, the options array's length changes
    if(this.props.guideOptions.length && nextProps.guideOptions.length !== this.props.guideOptions.length) {
      console.log('componentWillUpdate newAPIcall:', nextProps.guideOptions);
      this.props.getGuideList();  // lifting up state: API call is handled by WriteReviewPage container
    }
  }

  handleButtonClick(e) {
    // There are edge cases where clicking on the edge of a button can give undefined value
    const isGuided = e.target.firstChild.value ? e.target.firstChild.value === "guided" : this.state.isGuided;

    this.setState({
      isGuided: isGuided,
    });

    // If "No" is selected, clear the Select component (this disables the rating as well)
    if(!isGuided) {
      this.props.handleSelectGuide(null);
    }
    else if(!this.props.guideOptions.length) {
      // Do API call if "yes" is selected and options array is currently empty
      this.props.getGuideList();
    }
  }

  render() {
    return (
      <PageSection title="Was the trip guided?">
        {/* Yes/No buttons */}
        <div className="btn-group-md btn-group-toggle d-flex mx-3" data-toggle="buttons" onClick={this.handleButtonClick}>
          <label className="btn btn-block mr-3 btn-outline-primary">
            <input type="radio" value="guided" autoComplete="off"/>
            Yes
          </label>
          <label className="btn btn-block mt-0 btn-outline-secondary">
            <input type="radio" value="notGuided" autoComplete="off"/>
            No
          </label>
        </div>
        {/* Guide-list dropdown menu */}
        <Select className="my-2"
          disabled={!this.state.isGuided}
          required={this.state.isGuided}
          value={this.props.selectedGuideId}
          onChange={this.props.handleSelectGuide}
          options={this.props.guideOptions}
          clearable={true}
        />
        {/* Rate using Stars component */}
        <div className="d-flex flex-row justify-content-around">
          <label className={"d-flex align-self-center mb-0 " + (!!this.props.selectedGuideId ? "" : "text-secondary")}>
            Rate your guide:
          </label>
          <Stars className="d-flex"
            size={35}
            editable={Boolean(this.props.selectedGuideId)}
            value={0.0}
          />
        </div>
        <BorderBottomDiv className="pb-2" />
      </PageSection>
    )
  }
}

GuideReviewForm.propTypes = {
  isGuided: PropTypes.bool,
  selectedGuideId: PropTypes.number,
  guideOptions: PropTypes.arrayOf(PropTypes.shape(
    { value: PropTypes.number, label: PropTypes.string }
  )),
  handleSelectGuide: PropTypes.func.isRequired,
};

GuideReviewForm.defaultProps = {
  isGuided: false,
  selectedGuideId: null,
  guideOptions: [],
};

export default GuideReviewForm;
