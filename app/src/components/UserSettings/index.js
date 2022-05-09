// import : npm
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <Link to="/">
        <button type="button" className="button__home">
          Retourner à l'accueil
        </button>
      </Link>
    </div>
  );
}

export default UserSettings;
