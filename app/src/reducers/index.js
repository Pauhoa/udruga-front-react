import { combineReducers } from 'redux';

import userReducer from './user';
import registrationReducer from './registration';
import navigationReducer from './navigation';

const rootReducer = combineReducers({
  user: userReducer,
  registration: registrationReducer,
  navigation: navigationReducer,
});

export default rootReducer;
