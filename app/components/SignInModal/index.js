import React from 'react';
import styled from 'styled-components';

const ModalCloseX = styled.span`
  color: #ddd;
  font-size: 3.25rem;
  text-shadow: none;
`;

const SignInModalDialog = styled.div.attrs({
  className: 'modal-dialog',
})``;

const SignInModalContent = styled.div.attrs({
  className: 'modal-content',
})`
  &&& {
    background: transparent;
    border: transparent;

    & > div {
      border: inherit;
    }
  }
`;

const SignInModalBody = styled.div.attrs({
  className: 'modal-body pt-2',
})`
  color: white;
`;

const StyledLabel = styled.label.attrs({
  className: 'text-uppercase small mb-1',
})``;

const StyledInput = styled.input.attrs({
  type: 'input',
  className: 'form-control form-control-lg mb-2',
})``;

const StyledButton = styled.button.attrs({
  type: 'button',
  className: 'btn btn-primary btn-lg'
})``;

const SubmitButton = styled(StyledButton).attrs({
  className: 'my-4',
})`
  width: 95%;
  margin-left: 2.5%;
  margin-right: 2.5%;
`;

const SocialSignInButton = styled(StyledButton).attrs({
  className: 'col-5',
})``;

class SignInModal extends React.Component {
  render() {
    return (
      <div className="modal fade" id="signin-modal" role="dialog" aria-hidden="true">
        <SignInModalDialog role="document">
          <SignInModalContent>
            <div className="modal-header pb-1" data-dismiss="modal">
              <button type="button" className="close" id="signin-modal-close-btn" aria-label="Close">
                <ModalCloseX aria-hidden="true">&times;</ModalCloseX>
              </button>
            </div>
            <SignInModalBody>
              <h3 className="text-center px-3 mb-4">Join the world's leading outdoor adventure company</h3>
              <StyledLabel>Email</StyledLabel>
              <StyledInput />
              <StyledLabel>Password</StyledLabel>
              <StyledInput />
              <StyledLabel>Confirm Password</StyledLabel>
              <StyledInput />
              <SubmitButton>Sign Up</SubmitButton>
              <h5 className="small text-center text-secondary font-weight-bold">Or sign in using Facebook or Twitter</h5>
              <div className="row">
                <div className="clearfix w-100">
                  {/*The below buttons are obviously placeholders. They match the Zeplin layout.
                    Their size and content may need to be changed, as the flexibility to adjust such
                    buttons is very limited by FB's and Twitter's APIs (but there could be a workaround).*/}
                  <SocialSignInButton className="float-left">FB</SocialSignInButton>
                  <SocialSignInButton className="float-right bg-info">T</SocialSignInButton>
                </div>
              </div>
            </SignInModalBody>
          </SignInModalContent>
        </SignInModalDialog>
      </div>
    );
  }
}

SignInModal.propTypes = {};

export default SignInModal;
