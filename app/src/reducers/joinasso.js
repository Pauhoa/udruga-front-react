import { CHANGE_JOINASSO_FIELD, SAVE_ASSOS } from '../actions/joinasso';

export const initialeState = {
  assoId: 1,
};

const reducer = (state = initialeState, action = {}) => {
  switch (action.type) {
    case CHANGE_JOINASSO_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_ASSOS:
      return {
        ...state,
        allAssos: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
