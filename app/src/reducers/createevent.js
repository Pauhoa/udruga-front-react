import { CHANGE_CREATEEVENT_FIELD } from '../actions/createevent';

export const initialeState = {
  eventname: 'Réunion',
  categories: 'Cétégorie',
  description: 'Réunion hebdo',
  date: 'Date souhaité',
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
