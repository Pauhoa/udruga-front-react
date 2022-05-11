// import Style
import './profil.scss';

function Profil() {
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
      <form className="profil__events--section">
        <h2 className="profil__title">Evènements</h2>
        <input type="text" name="firstName" value="Evènement 1" />
        <div className="profil__manage" />
      </form>
    </div>

  );
}

export default Profil;
