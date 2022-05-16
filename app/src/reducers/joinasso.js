import { CHANGE_JOINASSO_FIELD } from '../actions/joinasso';

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
    default:
      return state;
  }
};

export default reducer;
