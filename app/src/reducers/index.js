import { combineReducers } from 'redux';

import userReducer from './user';
import registrationReducer from './registration';

const rootReducer = combineReducers({
  user: userReducer,
  registration: registrationReducer,
});

export default rootReducer;
