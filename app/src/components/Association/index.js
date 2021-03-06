// import : npm
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import : Local

// import Style
import './association.scss';
import { ReactComponent as CalendarSvg } from '../../assets/calendar.svg';
import { ReactComponent as EventSvg } from '../../assets/event.svg';
import { ReactComponent as CreateEventSvg } from '../../assets/createEvent.svg';
import JoinAsso from '../JoinAsso';
import CreateAsso from '../CreateAsso';

function Association() {
  const currentUser = useSelector((state) => state.user.current.user);
  const currentUserRole = useSelector((state) => state.user.current.user.roles);
  const userAsso = currentUser.association;

  return (
    <div className="asso">
      {(!userAsso.id) && currentUserRole[0] === 'ROLE_USER' && <JoinAsso />}
      {(!userAsso.id) && currentUserRole[0] === 'ROLE_ADMIN' && <CreateAsso />}
      {userAsso.id && (
        <>
          <div className="asso__info">
            <h2 className="asso__info--title">Nom Asso</h2>
            <p className="asso__info--descritption">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte.
            </p>
          </div>
          <div className="asso__events">
            <Link className="asso__events--card" to="/events">
              <h3>Les événements</h3>
              <EventSvg className="asso__events--card__svg" />
            </Link>
            {currentUserRole[0] === 'ROLE_USER' && (
              <div className="asso__events--card">
                <h3>Mes participations</h3>
                <CalendarSvg className="asso__events--card__svg" />
              </div>
            )}
            {currentUserRole[0] === 'ROLE_ADMIN' && (
              <Link className="asso__events--card" to="/create-event">
                <h3>Créer un évènement</h3>
                <CreateEventSvg className="asso__events--card__svg" />
              </Link>
            )}
          </div>
          <button type="button" className="button__unsub">
            Se désinscrire
          </button>
        </>
      )}
    </div>
  );
}

export default Association;
