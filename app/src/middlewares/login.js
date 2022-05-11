import axios from 'axios';
import { LOGIN, saveUser } from '../actions/user';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user;

      axios
        .post('la bonne api', {
          email: email,
          password: password,
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

export default loginMiddleware;
