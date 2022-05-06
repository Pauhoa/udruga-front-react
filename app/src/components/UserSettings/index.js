// import : npm
import { useSelector, useDispatch } from 'react-redux';
// import : Local
import { changeUserField } from '../../actions/user';

import './userSettings.scss';
import Signin from './Signin';
import Login from './Login';

function UserSettings() {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const handleChangeField = (value, name) => {
    dispatch(changeUserField(value, name));
  };

  return (
    <div className="user__settings">
      <Login
        email={email}
        password={password}
        changeField={handleChangeField}
      />
      <Signin />
    </div>
  );
}

export default UserSettings;
