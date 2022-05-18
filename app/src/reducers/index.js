import { combineReducers } from 'redux';
import createAssoReducer from './createAsso';
import createEventReducer from './createEvent';
import userReducer from './user';
import registrationReducer from './registration';
import navigationReducer from './navigation';
import joinAssoReducer from './joinasso';
import associationReducer from './association';
import eventsReducer from './events';

const rootReducer = combineReducers({
  user: userReducer,
  registration: registrationReducer,
  navigation: navigationReducer,
  createAsso: createAssoReducer,
  createEvent: createEventReducer,
  joinasso: joinAssoReducer,
  association: associationReducer,
  events: eventsReducer,
});

export default rootReducer;
