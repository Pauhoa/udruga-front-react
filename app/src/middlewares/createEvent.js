import axios from 'axios';
import { CREATE_EVENT } from '../actions/createEvent';

const createEventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_EVENT: {
      const state = store.getState();
      const {
        eventName, categories, description, date,
      } = state.createEvent;

      axios
        .post('http://charafcolo-server.eddi.cloud/projet-03-udruga-back/public/api/events', {
          title: eventName,
          type: categories,
          description: description,
          date: date,
        }).then((response) => {
          console.log(response.data);
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

export default createEventMiddleware;
