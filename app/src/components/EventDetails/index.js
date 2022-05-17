// import
import { Navigate, useParams } from 'react-router-dom';
import events from '../../data/events';

// import Style
import './eventDetails.scss';

function EventDetails() {
  const idParam = useParams();
  const { id } = idParam;

  const theEvent = events.find((event) => event.id === parseInt(id, 10));

  if (!theEvent) {
    return <Navigate to="/error" replace />;
  }
  return (
    <div className="eventDetails">
      <h2>{theEvent.title}</h2>
      <p>{theEvent.type}</p>
      <p>{theEvent.date}</p>
      <p>{theEvent.description}</p>
      <button type="submit">S'inscrire</button>
    </div>
  );
}

export default EventDetails;
