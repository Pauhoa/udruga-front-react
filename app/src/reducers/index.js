import { combineReducers } from 'redux';
import createEventReducer from './createEvent';
import userReducer from './user';
import registrationReducer from './registration';
import navigationReducer from './navigation';
import JoinAssoReducer from './joinasso';

const rootReducer = combineReducers({
  user: userReducer,
  registration: registrationReducer,
  navigation: navigationReducer,
  createEvent: createEventReducer,
  joinasso: JoinAssoReducer,
});

export default rootReducer;
