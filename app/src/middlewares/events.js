import axios from 'axios';
import { toggleLoading } from '../actions/app';

import { FETCH_EVENTS, saveEvents, JOIN_EVENT } from '../actions/events';

const eventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      axios
        .get('http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/events')
        .then(
          (response) => {
            store.dispatch(saveEvents(response.data));
            store.dispatch(toggleLoading());
          },
        ).catch(
          () => console.log('error events api'),
        );
      next(action);
      break;
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

export default eventMiddleware;
