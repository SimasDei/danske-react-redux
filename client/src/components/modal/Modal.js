import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clearValue } from '../../actions/values';

const Modal = ({ clearValue, children }) => {
  const onClickHandler = () => {
    console.log('close modal, please');
    clearValue();
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
};

export default connect(
  null,
  { clearValue },
)(Modal);
