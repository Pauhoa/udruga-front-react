import axios from 'axios';
import { CREATE_EVENT, saveEvent } from '../actions/createEvent';

const createEventMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_EVENT: {
      const state = store.getState();
      const {
        eventName, categories, description, date,
      } = state.createEvent;

      axios
        .post('la bonne api', {
          eventName: eventName,
          categories: categories,
          description: description,
          date: date,
        }).then((response) => {
          store.dispatch(saveEvent(response.data));
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
