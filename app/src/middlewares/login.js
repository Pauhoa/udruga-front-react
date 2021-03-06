import axios from 'axios';
import { LOGIN, saveUser } from '../actions/user';
import { toggleLoading } from '../actions/app';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user;

      const dataLogin = {
        username: email,
        password: password,
      };

      axios
        .post('http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/login_check', dataLogin)
        .then((response) => {
          localStorage.setItem('user', JSON.stringify(response.data));
          store.dispatch(saveUser(response.data));
          store.dispatch(toggleLoading());
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
