import axios from 'axios';

import { FETCH_ASSOS, saveAssos } from '../actions/joinasso';

const joinAssoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ASSOS:
      axios
        .get('http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/associations')
        .then(
          (response) => {
            store.dispatch(saveAssos(response.data));
          },
        ).catch(
          () => console.log('fetch assos api call error'),
        );
      next(action);
      break;
    default:
      next(action);
  }
};

export default joinAssoMiddleware;
