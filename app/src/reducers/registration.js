import { CHANGE_SIGNIN_FIELD } from '../actions/user';

export const initialState = {
  firstName: 'coco',
  lastName: 'Louis',
  signinEmail: 'coco@gmail.fr',
  signinPassword: 'hello',
  confirmedPassword: 'hello',
  role: 'user',
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
