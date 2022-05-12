// import Style
import './profile.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import JoinAsso from '../JoinAsso';

import { ReactComponent as LogoProfile } from '../../assets/user.svg';

function Profile() {
  const currentUser = useSelector((state) => state.user.current.user);
  const userRole = currentUser.role;
  const userAsso = currentUser.association_id;

  return (
    <div className="profil">
      <LogoProfile className="profil__logo" />
      <form className="profil__section">
        <h2 className="profil__title">Profil</h2>
        <input type="text" name="firstName" value={currentUser.first_name} />
        <input type="text" name="lastName" value={currentUser.last_name} />
        <input type="text" name="email" value={currentUser.email} />
        <input type="role" name="role" value={currentUser.role} />
        <div className="profil__manage">
          <button type="button" className="profil__manage--button__modify">
            Modifier
          </button>
          <button type="button" className="profil__manage--button__delete">
            Supprimer
          </button>
        </div>
      </form>
      {(userRole === 'user') && (
        (userAsso === null) ? (
          <JoinAsso />)
          : (
            <p>Bienvenue {currentUser.first_name}</p>
          )
      )}
      { (userRole === 'admin') && (
        <Link to="/create-event">
          <button type="button">Créer une association</button>
        </Link>
      )}
    </div>

  );
}

export default Profile;
