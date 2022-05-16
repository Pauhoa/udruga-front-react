import axios from 'axios';
import { CREATE_ASSO, saveAsso } from '../actions/createAsso';

const createAssoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_ASSO: {
      const state = store.getState();
      const {
        assoName, description, siren,
      } = state.createAsso;

      const {
        email, id,
      } = state.user.current.user;

      axios
        .post('la bonne api', {
          name: assoName,
          SIREN: siren,
          description: description,
          email: email,
          code_user: id,
        }).then((response) => {
          store.dispatch(saveAsso(response.data));
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

export default createAssoMiddleware;
