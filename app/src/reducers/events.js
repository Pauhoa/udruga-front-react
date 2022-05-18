import { SAVE_EVENTS } from '../actions/events';

export const initialState = {
  events: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EVENTS:
      return {
        ...state,
        events: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
