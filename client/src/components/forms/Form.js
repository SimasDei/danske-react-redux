import React from 'react';

const Form = () => {
  return (
    <section className="form__container">
      <div className="form__header">
        <h1>Form Input</h1>
      </div>
      <form className="form">
        <div className="form__group">
          <label className="form__label" htmlFor="val1">
            Enter a Alpha Numeric Value
          </label>
          <input className="form__input" type="text" name="val1" placeholder="1234" />
        </div>
        <button className="form__button">Submit</button>
      </form>
    </section>
  );
};

export default Form;
