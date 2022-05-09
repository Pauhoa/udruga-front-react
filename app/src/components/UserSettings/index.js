// import : npm
import { useDispatch } from 'react-redux';
// import : Local
import { changeUserField } from '../../actions/user';

import './userSettings.scss';
import Signin from './Signin';
import Login from './Login';

function UserSettings() {
  const dispatch = useDispatch();

  const handleChangeField = (value, name) => {
    dispatch(changeUserField(value, name));
  };

  return (
    <div className="user__settings">
      <Login
        className="user__settings--field"
        changeField={handleChangeField}
      />
      <Signin
        className="user__settings--field"
        changeField={handleChangeField}
      />
    </div>
  );
}

export default UserSettings;
