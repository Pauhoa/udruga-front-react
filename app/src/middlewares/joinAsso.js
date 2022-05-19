import axios from 'axios';

import {
  FETCH_ASSOS,
  saveAssos,
  JOIN_ASSO_API,
  changeJoinAssoField,
} from '../actions/joinasso';
import { saveUser } from '../actions/user';

const joinAssoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ASSOS:
      axios
        .get('http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/associations')
        .then(
          (response) => {
            store.dispatch(saveAssos(response.data));
            store.dispatch(changeJoinAssoField(response.data[0].id, 'assoId'));
          },
        ).catch(
          () => console.log('fetch assos api call error'),
        );
      next(action);
      break;
    case JOIN_ASSO_API:
      axios
        .patch(`http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/users/edit/${action.userId}`, {
          associationMember: action.assoId,
        })
        .then(
          (response) => {
            console.log(response);
            store.dispatch(saveUser(response.data));
          },
        ).catch(
          () => console.log('impossible join asso api'),
        );
      next(action);
      break;
    default:
      next(action);
  }
};

export default joinAssoMiddleware;
