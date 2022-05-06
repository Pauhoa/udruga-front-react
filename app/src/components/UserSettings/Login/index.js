import Proptypes from 'prop-types';

// styles
import './login.scss';

function Login({
  name,
  onChange,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <form
      className="login__form"
    >
      Se connecter
      <input
        value="email"
        type="email"
        name={name}
        placeholder="Votre email"
        onChange={handleChange}
      />
      <input
        value="password"
        type="password"
        name="password"
        placeholder="Votre mot de passe"
      />
      <button type="submit">Connexion</button>
    </form>
  );
}

Login.propTypes = {
  name: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
};
export default Login;
