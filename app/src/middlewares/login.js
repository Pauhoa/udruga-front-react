import axios from 'axios';
import { LOGIN, saveUser } from '../actions/user';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user;

      const dataLogin = {
        username: email,
        password: password,
      };

      console.log(dataLogin);

      axios
        .post('http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/login_check', dataLogin)
        .then((response) => {
          console.log(response.status);
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
