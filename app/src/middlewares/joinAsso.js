import axios from 'axios';
import { JOIN_EVENT } from '../actions/events';

import {
  FETCH_ASSOS,
  saveAssos,
  JOIN_ASSO_API,
  changeJoinAssoField,
} from '../actions/joinasso';
import { updateUser } from '../actions/user';

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
    {
      const state = store.getState();
      const { token } = state.user.current;
      axios
        .patch(`http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/users/edit/${action.userId}`, {
          associationMember: action.assoId,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          (response) => {
            console.log({ 'respnse ok ': response.data });
            store.dispatch(updateUser(response.data));
          },
        ).catch(
          () => console.log('erreur join asso api'),
        );
      next(action);
      break;
    }
    case JOIN_EVENT:
    {
      const state = store.getState();
      const { userId } = state.user.current.user;

      axios
        .post(`http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/users/event/add/${action.eventId}`, {
          users: userId,
        })
        .then(
          (response) => {
            console.log(response.data);
          },
        ).catch(
          () => console.log('erreur call api event/user participate'),
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default joinAssoMiddleware;
