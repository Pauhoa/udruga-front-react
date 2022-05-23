import axios from 'axios';
import { CREATE_ASSO, saveAsso } from '../actions/createAsso';
import { saveUser } from '../actions/user';

const createAssoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_ASSO: {
      const state = store.getState();
      const {
        assoName, description, siren,
      } = state.createAsso;

      const { token } = state.user.current;

      const {
        email, id,
      } = state.user.current.user;

      axios
        .post('http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/associations', {
          name: assoName,
          description: description,
          siren: siren,
          email: email,
          registrationCode: 12345,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          store.dispatch(saveAsso(response.data));
          axios
            .patch(`http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/users/edit/${id}`, {
              associationMember: response.data.id,
            }, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }).then((secondeResponse) => {
              store.dispatch(saveUser(secondeResponse.data));
            }).catch(() => {
              console.log('erreur appel api patch user');
            });
        }).catch(() => {
          console.log('erreur appel api create asso');
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
