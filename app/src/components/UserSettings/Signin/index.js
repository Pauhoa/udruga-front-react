/* eslint-disable jsx-a11y/label-has-associated-control */
import Proptypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../../actions/user';

// styles
import '../userSettings.scss';

function Signin({
  changeField,
}) {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(signin());
  }

  const lastName = useSelector((state) => state.registration.lastName);
  const firstName = useSelector((state) => state.registration.firstName);
  const email = useSelector((state) => state.registration.signinEmail);
  const password = useSelector((state) => state.registration.signinPassword);
  const confirmedPassword = useSelector((state) => state.registration.confirmedPassword);
  const role = useSelector((state) => state.registration.role);

  return (
    <form
      className="form form__signin"
      onSubmit={handleSubmit}
    >Inscrivez-vous
      <input
        type="text"
        name="firstName"
        placeholder="Votre prénom"
        onChange={handleChange}
        value={firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Votre nom"
        onChange={handleChange}
        value={lastName}
      />
      <input
        type="text"
        name="signinEmail"
        placeholder="Votre email"
        onChange={handleChange}
        value={email}
      />
      <input
        type="password"
        name="signinPassword"
        placeholder="Votre mot de passe"
        onChange={handleChange}
        value={password}
      />
      <input
        type="password"
        name="confirmedPassword"
        placeholder="Confirmation du mot de passe"
        onChange={handleChange}
        value={confirmedPassword}
      />
      <label
        htmlFor="role_select"
      >Choisissez un rôle
      </label>
      <select
        value={role}
        name="role"
        id="role_select"
        onChange={handleChange}
      >
        <option
          value="ROLE_USER"
        >Adhérent
        </option>
        <option
          value="ROLE_ADMIN"
        >Administrateur
        </option>
      </select>
      <button
        type="submit"
      >S'insrire
      </button>
    </form>
  );
}
Signin.propTypes = {
  changeField: Proptypes.func.isRequired,
};
export default Signin;
