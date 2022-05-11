import { combineReducers } from 'redux';
import createEventReducer from './createEvent';
import userReducer from './user';
import registrationReducer from './registration';
import navigationReducer from './navigation';

const rootReducer = combineReducers({
  user: userReducer,
  registration: registrationReducer,
  navigation: navigationReducer,
  createEvent: createEventReducer,
});

export default rootReducer;
