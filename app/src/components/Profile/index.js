// import Style
import './profile.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import JoinAsso from '../JoinAsso';

import { ReactComponent as LogoProfile } from '../../assets/user.svg';

function Profile() {
  const currentUser = useSelector((state) => state.user.current.user);
  const currentUserRole = useSelector((state) => state.user.current.user.roles);
  // const userRole = currentUser.role;
  const userAsso = currentUser.association_id;

  return (
    <div className="profil">
      <LogoProfile className="profil__logo" />
      <form className="profil__section">
        <h2 className="profil__title">Profil</h2>
        <input type="text" name="firstName" value={currentUser.firstname} />
        <input type="text" name="lastName" value={currentUser.lastname} />
        <input type="text" name="email" value={currentUser.email} />
        <input type="role" name="role" value={currentUserRole} />
        <div className="profil__manage">
          <button type="button" className="profil__manage--button__modify">
            Modifier
          </button>
          <button type="button" className="profil__manage--button__delete">
            Supprimer
          </button>
        </div>
      </form>
      {(currentUserRole[0] === 'ROLE_USER') && (
        (!userAsso) ? (
          <JoinAsso />)
          : (
            <p>Bienvenue {currentUser.firstname}</p>
          )
      )}
      { (currentUserRole === 'ROLE_ADMIN') && (
        <Link to="/create-event">
          <button type="button">Créer une association</button>
        </Link>
      )}
    </div>

  );
}

export default Profile;
