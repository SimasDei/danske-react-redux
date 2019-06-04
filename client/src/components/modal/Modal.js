import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clearValue, toggleModal } from '../../actions/values';

const Modal = ({ clearValue, children, toggleModal }) => {
  const onClickHandler = () => {
    clearValue();
    toggleModal();
  };
  return (
    <figure className="modal">
      <header className="modal__header">Summary:</header>
      <div className="modal__content">{children}</div>
      <div className="modal__actions">
        <button className="btn" onClick={onClickHandler}>
          Close
        </button>
      </div>
    </figure>
  );
};

Modal.propTypes = {
  clearValue: PropTypes.func,
  toggleModal: PropTypes.func.isRequired,
};

export default connect(
  null,
  { clearValue, toggleModal },
)(Modal);
