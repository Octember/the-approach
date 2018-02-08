import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavModalDialog = styled.div.attrs({
  className: 'modal-dialog',
})`
  &&& {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const NavModalContent = styled.div.attrs({
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

const ModalCloseX = styled.span`
  color: #ddd;
  font-size: 3.25rem;
  text-shadow: none;
`;

const ModalLink = styled(Link)`
  &&& {
    color: #b8daff;
  }
`;

function NavModal() {
  // Callback for click event: Modal needs help closing properly after clicking on link (otherwise overlay will stay and make site unusable).
  function hideNavModal() {
    document.getElementById('nav-modal-close-btn').click();
  }

  return (
    <div className="modal fade" id="nav-modal" role="dialog" aria-hidden="true" onClick={hideNavModal}>
      <NavModalDialog role="document">
        <NavModalContent>
          <div className="modal-header" data-dismiss="modal">
            <button type="button" className="close" id="nav-modal-close-btn" aria-label="Close">
              <ModalCloseX aria-hidden="true">&times;</ModalCloseX>
            </button>
          </div>
          <div className="modal-body">
            <ul className="nav flex-column text-center">
              <li className="nav-item">
                <ModalLink className="nav-link active" to="/">Home</ModalLink>
              </li>
              <li className="nav-item">
                <ModalLink className="nav-link active" to="/locationlist">Location List</ModalLink>
              </li>
              <li className="nav-item">
                <ModalLink className="nav-link active" to="/offerlist">Offer List</ModalLink>
              </li>
              <li className="nav-item">
                <ModalLink className="nav-link active" to="/form">Submit Review</ModalLink>
              </li>
            </ul>
          </div>
        </NavModalContent>
      </NavModalDialog>
    </div>
  );
}

NavModal.propTypes = {};

export default NavModal;
