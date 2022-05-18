import axios from 'axios';

import { FETCH_EVENTS, saveEvents } from '../actions/events';

const eventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      axios
        .get('http://http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/events')
        .then(
          (response) => {
            store.dispatch(saveEvents(response.data));
          },
        ).catch(
          () => console.log('error events api'),
        );
      next(action);
      break;
    default:
      next(action);
  }
};

export default eventMiddleware;
