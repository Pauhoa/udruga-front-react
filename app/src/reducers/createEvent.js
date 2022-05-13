import { CHANGE_CREATEEVENT_FIELD, SAVE_EVENT } from '../actions/createEvent';

export const initialeState = {
  eventName: '',
  categories: '',
  description: '',
  date: '',
};

const reducer = (state = initialeState, action = {}) => {
  switch (action.type) {
    case CHANGE_CREATEEVENT_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_EVENT:
      return {
        ...state,
        ...action.createEvent,
      };
    default:
      return state;
  }
};

export default reducer;
