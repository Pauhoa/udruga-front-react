import axios from 'axios';
import { SIGNIN, saveUser } from '../actions/user';

const signinMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNIN: {
      const state = store.getState();
      const {
        lastName, firstName, email, password, confirmedPassword, role,
      } = state.user;

      axios
        .post('la bonne api', {
          lastName: lastName,
          firstName: firstName,
          email: email,
          password: password,
          confirmedPassword: confirmedPassword,
          role: role,
        }).then((response) => {
          store.dispatch(saveUser(response.data));
        }).catch(() => {
          console.log('erreur appel api');
        });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default signinMiddleware;
