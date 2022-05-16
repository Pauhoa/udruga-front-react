import { CHANGE_SIGNIN_FIELD } from '../actions/user';

export const initialState = {
  firstName: '',
  lastName: '',
  signinEmail: '',
  signinPassword: '',
  confirmedPassword: '',
  role: 'ROLE_USER',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SIGNIN_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
