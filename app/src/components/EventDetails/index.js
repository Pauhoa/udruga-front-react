// import
import { Navigate, useParams/* , useLocation  */ } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { joinEvent } from '../../actions/events';
// import Style
import './eventDetails.scss';

function EventDetails() {
  const dispatch = useDispatch();

  const idParam = useParams();
  const { id } = idParam;

  const events = useSelector((state) => state.events.events);
  const theEvent = events.find((event) => event.id === parseInt(id, 10));

  if (!theEvent) {
    return <Navigate to="/error" replace />;
  }
  return (
    <div className="eventDetails">
      <h2>{theEvent.title}</h2>
      <img src={theEvent.image} alt="component" />
      <p>{theEvent.type}</p>
      <p>{`Le ${(new Date(theEvent.date)).toLocaleDateString('fr')} à ${(new Date(theEvent.date)).toLocaleTimeString('fr')}`}</p>
      <p>{theEvent.description}</p>
      <button
        type="button"
        onClick={dispatch(joinEvent(id))}
      >S'inscrire
      </button>

    </div>
  );
}

export default EventDetails;
