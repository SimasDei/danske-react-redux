import axios from 'axios';

import {
  SET_VALUE,
  SET_SECOND_VALUE,
  SET_THIRD_VALUE,
  SET_FOURTH_VALUE,
  SET_LOADING,
  CLEAR_VALUE,
  TOGGLE_MODAL,
} from './types';

export const setValue = formData => dispatch => {
  dispatch({ type: SET_LOADING });
  axios
    .get(`/api/person/${formData.val1}`)
    .then(res => {
      dispatch({
        type: SET_VALUE,
        payload: res.data,
      });

      axios.get(`/api/facility/${res.data.val1}`).then(res => {
        dispatch({
          type: SET_SECOND_VALUE,
          payload: res.data,
        });
      });

      axios
        .get(`/api/exposure/${res.data.val2}`)
        .then(res => {
          dispatch({
            type: SET_THIRD_VALUE,
            payload: res.data,
          });
        })
        .then(() => {
          dispatch({
            type: SET_FOURTH_VALUE,
          });
          dispatch({ type: SET_LOADING });
        });
    })
    .catch(error => {
      dispatch({ type: SET_LOADING });
      console.error({ msg: error.msg });
    });
};

export const clearValue = () => dispatch => dispatch({ type: CLEAR_VALUE });

export const toggleModal = () => dispatch => dispatch({ type: TOGGLE_MODAL });
