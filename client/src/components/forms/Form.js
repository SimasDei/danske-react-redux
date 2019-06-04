import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setValue, toggleModal } from '../../actions/values';

import Modal from '../modal/Modal';
import Backdrop from '../modal/Backdrop';

const Form = ({ setValue, toggleModal, loading, val6, modal }) => {
  const [formData, setFormData] = useState({
    val1: '',
    error: '',
    valid: false,
  });

  const { val1, error, valid } = formData;

  const onChangeHandler = e => {
    if (e.target.value.length > 10) {
      setFormData({
        ...formData,
        val1: e.target.value,
        valid: false,
        error: 'Value must be between 1 and 10 characters',
      });
    } else if (e.target.value.length < 1) {
      setFormData({
        ...formData,
        val1: e.target.value,
        valid: false,
        error: 'Value must be between 1 and 10 characters',
      });
    } else {
      setFormData({ ...formData, val1: e.target.value, valid: true, error: '' });
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const formData = { val1: parseInt(val1) };
    setValue(formData);
    toggleModal();
    formData.val1 = '';
  };

  return (
    <section className="form__container">
      <div className="form__header">
        <h1>Form Input</h1>
      </div>
      <form className="form" onSubmit={e => onSubmitHandler(e)}>
        <div className="form__group">
          <label className="form__label" htmlFor="val1">
            Enter a Alpha Numeric Value
          </label>
          <input
            className="form__input"
            type="text"
            name="val1"
            placeholder="1234"
            value={val1}
            onChange={e => onChangeHandler(e)}
          />
          {error && <span className="form__error">{error}</span>}
        </div>
        <button className="btn" disabled={!valid} required>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {modal && <Backdrop />}
      {modal && <Modal>Final value: {val6}</Modal>}
    </section>
  );
};

const mapStateToProps = state => ({
  loading: state.values.loading,
  val6: state.values.val6,
  modal: state.values.modal,
});

Form.propTypes = {
  setValue: PropTypes.func,
  toggleModal: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  val6: PropTypes.any,
  modal: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  { setValue, toggleModal },
)(Form);
