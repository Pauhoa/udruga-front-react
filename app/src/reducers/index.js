import { combineReducers } from 'redux';
import createAssoReducer from './createAsso';
import createEventReducer from './createEvent';
import userReducer from './user';
import registrationReducer from './registration';
import navigationReducer from './navigation';
import JoinAssoReducer from './joinasso';

const rootReducer = combineReducers({
  user: userReducer,
  registration: registrationReducer,
  navigation: navigationReducer,
  createAsso: createAssoReducer,
  createEvent: createEventReducer,
  joinasso: JoinAssoReducer,
});

export default rootReducer;
