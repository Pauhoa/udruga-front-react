/* eslint-disable jsx-a11y/label-has-associated-control */
import Proptypes from 'prop-types';
import { useSelector } from 'react-redux';

// styles
import './signin.scss';

function Signin({
  changeField,
}) {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const lastName = useSelector((state) => state.registration.lastName);
  const firstName = useSelector((state) => state.registration.firstName);
  const email = useSelector((state) => state.registration.email);
  const password = useSelector((state) => state.registration.password);
  const confirmedPassword = useSelector((state) => state.registration.confirmedPassword);
  const role = useSelector((state) => state.registration.role);

  return (
    <form className="form form__signin">S'inscrire
      <input type="text" name="firstname" placeholder="Votre prénom" onChange={handleChange} value={firstName} />
      <input type="text" name="lastname" placeholder="Votre nom" onChange={handleChange} value={lastName} />
      <input type="text" name="email" placeholder="Votre email" onChange={handleChange} value={email} />
      <input type="text" name="password" placeholder="Votre mot de passe" onChange={handleChange} value={password} />
      <input type="text" name="confirmedPassword" placeholder="Confirmation du mot de passe" onChange={handleChange} value={confirmedPassword} />
      <label htmlFor="role_select">Choisissez judicieusement un rôle</label>
      <select value={role} name="role" id="role_select" onChange={handleChange}>
        <option value="user">Adhérent</option>
        <option value="admin">Administrateur</option>
      </select>
      <button type="submit">S'insrire</button>
    </form>
  );
}
Signin.propTypes = {
  changeField: Proptypes.func.isRequired,
};
export default Signin;
