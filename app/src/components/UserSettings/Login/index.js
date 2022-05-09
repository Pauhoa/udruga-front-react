import Proptypes from 'prop-types';
import { useSelector } from 'react-redux';
// styles
import '../userSettings.scss';

function Login({
  changeField,
}) {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  return (
    <form
      className="form form__login"
    >
      Se connecter
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
      <button type="submit">Connexion</button>
    </form>
  );
}

Login.propTypes = {
  changeField: Proptypes.func.isRequired,
};
export default Login;
