// import
import { Navigate, useParams/* , useLocation  */ } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { joinEvent } from '../../actions/events';
import { ReactComponent as Training } from '../../assets/training.svg';
import { ReactComponent as Competition } from '../../assets/competition.svg';
import { ReactComponent as Meeting } from '../../assets/meeting.svg';

// import Style
import './eventDetails.scss';

function EventDetails() {
  const dispatch = useDispatch();

  const idParam = useParams();
  const { id } = idParam;
  const events = useSelector((state) => state.events.events);
  const theEvent = events.find((event) => event.id === parseInt(id, 10));

  function handleJoinEventButton() {
    dispatch(joinEvent(id));
  }

  let imageComponent = null;
  switch (theEvent.type) {
    case 'Réunion':
      imageComponent = <Meeting className="eventDetails__image" />;
      break;
    case 'Activité':
      imageComponent = <Training className="eventDetails__image" />;
      break;
    case 'Formation':
      imageComponent = <Competition className="eventDetails__image" />;
      break;
    default:
      return {
        imageComponent,
      };
  }

  if (!theEvent) {
    return <Navigate to="/error" replace />;
  }
  return (
    <div className="eventDetails">
      <h2>{theEvent.title}</h2>
      {imageComponent}
      <p>{theEvent.type}</p>
      <p>{`Le ${(new Date(theEvent.date)).toLocaleDateString('fr')}`}</p>
      <p>{theEvent.description}</p>
      <button
        type="button"
        onClick={handleJoinEventButton}
      >S'inscrire
      </button>

    </div>
  );
}

export default EventDetails;
