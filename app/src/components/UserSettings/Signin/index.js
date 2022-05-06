// styles
import './signin.scss';

function Signin() {
  return (
    <form className="form form__signin">S'inscrire
      <input type="text" name="firstname" placeholder="Votre prénom" />
      <input type="text" name="lastname" placeholder="Votre nom" />
      <input type="text" name="email" placeholder="Votre email" />
      <input type="text" name="password" placeholder="Votre mot de passe" />
      <input type="text" name="confirmed-password" placeholder="Confirmation du mot de passe" />
      <input type="radio" name="role" value="admin" /> Administrateur
      <input type="radio" name="role" value="user" /> Adhérent
    </form>
  );
}

export default Signin;
