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
      <ul>
        <li>{theEvent.title}</li>
        <li>{theEvent.type}</li>
        <li>{theEvent.date}</li>
        <li>description</li>
      </ul>
    </div>
  );
}

export default EventDetails;
