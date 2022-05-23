import axios from 'axios';
import { SIGNIN, saveUser } from '../actions/user';

const signinMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNIN: {
      const state = store.getState();
      const {
        lastName, firstName, signinEmail, signinPassword, role,
      } = state.registration;

      const dataSignup = {
        lastName: lastName,
        firstName: firstName,
        email: signinEmail,
        password: signinPassword,
        roles: [role],
      };

      axios
        .post('http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/users', dataSignup)
        .then((response) => {
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
