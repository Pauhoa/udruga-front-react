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
  const assoMember = useSelector((state) => state.association.name);
  return (
    <div className="profil">
      <LogoProfile className="profil__logo" />
      <div className="profil__section">
        <h2 className="profil__title">Profil</h2>
        <p>{currentUser.firstname}</p>
        <p>{currentUser.lastname}</p>
        <p>{currentUserRole}</p>
        <p>{currentUser.email} </p>
        {/* <div className="profil__manage">
          <button type="button" className="profil__manage--button__modify">
            Modifier
          </button>
          <button type="button" className="profil__manage--button__delete">
            Supprimer
          </button>
        </div> */}
      </div>
      {
        (currentUserRole[0] === 'ROLE_USER')
        && (!userAsso)
        && (<JoinAsso />)
      }
      {userAsso && <p>Votre association : {assoMember}</p>}
      { (currentUserRole[0] === 'ROLE_ADMIN') && (
        <Link to="/create-asso">
          <button type="button">Créer une association</button>
        </Link>
      )}
    </div>

  );
}

export default Profile;
