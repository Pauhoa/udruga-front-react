import { CHANGE_CREATEEVENT_FIELD } from '../actions/createEvent';

export const initialeState = {
  eventName: '',
  categories: 'Réunion',
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
    default:
      return state;
  }
};

export default reducer;
