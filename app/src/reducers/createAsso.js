import { CHANGE_CREATEASSO_FIELD } from '../actions/createAsso';

export const initialeState = {
  id: 1,
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
    default:
      return state;
  }
};

export default reducer;
