// import
import { /* Navigate, */ useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Style
import './eventDetails.scss';

function EventDetails() {
  const idParam = useParams();
  const { id } = idParam;

  const events = useSelector((state) => state.events.events);

  const theEvent = events.find((event) => event.id === parseInt(id, 10));

  // if (!theEvent) {
  //   return <Navigate to="/error" replace />;
  // }
  return (
    <div className="eventDetails">
      <h2>{theEvent.title}</h2>
      <img src={theEvent.image} alt="component" />
      <p>{theEvent.type}</p>
      <p>{`Le ${(new Date(theEvent.date)).toLocaleDateString('fr')} à ${(new Date(theEvent.date)).toLocaleTimeString('fr')}`}</p>
      <p>{theEvent.description}</p>
      <button type="submit">S'inscrire</button>
    </div>
  );
}

export default EventDetails;
