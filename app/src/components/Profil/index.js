// import Style
import './profil.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import JoinAsso from '../JoinAsso';

function Profil() {
  const currentUser = useSelector((state) => state.user.current.user);
  const userRole = currentUser.role;
  const userAsso = currentUser.association_id;

  return (
    <div className="profil">
      <form className="profil__section">
        <h2 className="profil__title">Profil</h2>
        <input type="text" name="firstName" value="Coco" />
        <input type="text" name="lastName" value="L'Asticot" />
        <input type="text" name="email" value="coco-lasticot@gmail.com" />
        <input type="role" name="role" value="Adhérent" />
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
            <p>CoucouCoucou</p>
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

export default Profil;
