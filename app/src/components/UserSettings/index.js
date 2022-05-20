// import : npm
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
// import : Local
import { changeLoginField, changeSigninField } from '../../actions/user';

import './userSettings.scss';
import Signin from './Signin';
import Login from './Login';

function UserSettings() {
  const dispatch = useDispatch();

  const handleChangeLoginField = (value, name) => {
    dispatch(changeLoginField(value, name));
  };

  const handleChangeSigninField = (value, name) => {
    dispatch(changeSigninField(value, name));
  };

  const userToken = useSelector((state) => state.user.current.token);
  if (userToken) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="user__settings">
      <Login
        className="user__settings--field"
        changeField={handleChangeLoginField}
      />
      <Signin
        className="user__settings--field"
        changeField={handleChangeSigninField}
      />
      <Link to="/">
        <button type="button" className="button__home">
          Retourner à l'accueil
        </button>
      </Link>
    </div>
  );
}

export default UserSettings;
