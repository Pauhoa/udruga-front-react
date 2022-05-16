import { combineReducers } from 'redux';
import createAssoReducer from './createAsso';
import createEventReducer from './createEvent';
import userReducer from './user';
import registrationReducer from './registration';
import navigationReducer from './navigation';
import joinAssoReducer from './joinasso';
import association from './association';

const rootReducer = combineReducers({
  user: userReducer,
  registration: registrationReducer,
  navigation: navigationReducer,
  createAsso: createAssoReducer,
  createEvent: createEventReducer,
  joinasso: joinAssoReducer,
  association: association,
});

export default rootReducer;
