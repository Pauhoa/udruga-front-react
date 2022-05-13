import axios from 'axios';
import { LOGIN, saveUser } from '../actions/user';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user;

      axios
        .post('http://localhost:8080/api/login', {
          email: email,
          password: password,
        }).then((response) => {
          console.log(response);
          store.dispatch(saveUser(response));
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
