import { SAVE_EVENTS, SAVE_PARTICIPATE } from '../actions/events';

export const initialState = {
  events: [],
  participate: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EVENTS:
      return {
        ...state,
        events: action.data,
      };
    case SAVE_PARTICIPATE:
      return {
        ...state,
        participate: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
