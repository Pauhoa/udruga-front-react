import Proptypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/user';
import { toggleLoading } from '../../../actions/app';
// styles
import '../userSettings.scss';

function Login({
  changeField,
}) {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(toggleLoading());
    dispatch(login());
  }
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  return (
    <form
      className="form form__login"
      onSubmit={handleSubmit}
    >
      Connectez-vous
      <input
        value={email}
        type="email"
        name="email"
        placeholder="Votre email"
        onChange={handleChange}
      />
      <input
        value={password}
        type="password"
        name="password"
        placeholder="Votre mot de passe"
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Se connecter
      </button>
    </form>
  );
}

Login.propTypes = {
  changeField: Proptypes.func.isRequired,
};
export default Login;
