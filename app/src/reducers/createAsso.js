import { CHANGE_CREATEASSO_FIELD, SAVE_ASSO } from '../actions/createAsso';

export const initialeState = {
  assoName: 'coucou',
  description: 'coucou 2',
  siren: 'FBIOPENUP302938',
};

const reducer = (state = initialeState, action = {}) => {
  switch (action.type) {
    case CHANGE_CREATEASSO_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_ASSO:
      return {
        ...state,
        ...action.createEvent,
      };
    default:
      return state;
  }
};

export default reducer;
