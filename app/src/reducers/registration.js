import { CHANGE_USER_FIELD } from '../actions/user';

export const initialState = {

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD:
      return {
        ...state,
        login: {
          ...state.login,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
