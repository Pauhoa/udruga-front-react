// import { useEffect } from 'react';
import { /* useDispatch */ useSelector } from 'react-redux';
// styles
import './events.scss';

import Event from './Event';

function Events() {
  const events = useSelector((state) => state.events.events);

  return (
    <div className="events">
      {events.length < 1 && <p className="no-event">Il n'y a aucun évènement disponible</p>}
      { events.length > 0
        && events.map((event) => (
          <Event
            id={event.id}
            key={event.id}
            title={event.title}
            type={event.type}
            date={event.date}
            img={event.image}
          />
        ))}
    </div>
  );
}

export default Events;
