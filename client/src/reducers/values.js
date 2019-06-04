import {
  SET_VALUE,
  SET_SECOND_VALUE,
  SET_THIRD_VALUE,
  SET_FOURTH_VALUE,
  SET_LOADING,
  CLEAR_VALUE,
  TOGGLE_MODAL,
} from '../actions/types.js';

const initialState = {
  val1: null,
  val2: null,
  val3: null,
  val4: null,
  val5: null,
  val6: null,
  loading: false,
  modal: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        val1: action.payload.val1,
        val2: action.payload.val2,
      };
    case SET_SECOND_VALUE:
      return {
        ...state,
        val3: action.payload.val3,
        val4: action.payload.val4,
      };
    case SET_THIRD_VALUE:
      return {
        ...state,
        val5: action.payload.val5,
      };
    case SET_FOURTH_VALUE:
      return {
        ...state,
        val6: state.val3 * state.val5 || 'Not a number',
      };
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case CLEAR_VALUE: {
      return {
        ...state,
        state: initialState,
      };
    }
    case TOGGLE_MODAL: {
      return {
        ...state,
        modal: !state.modal,
      };
    }
    default:
      return state;
  }
}
