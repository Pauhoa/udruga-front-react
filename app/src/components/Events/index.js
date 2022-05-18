import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../actions/events';
// styles
import './events.scss';

import Event from './Event';

function Events() {
  // const events = [
  //   {
  //     id: 1,
  //     title: 'Rendez-vous annuel',
  //     type: 'meeting',
  //     date: 1654358351,
  //   },
  //   {
  //     id: 2,
  //     title: 'Entraînement Cadets',
  //     type: 'training',
  //     date: 1654358351,
  //   },
  //   {
  //     id: 3,
  //     title: 'Match vs US-METZ',
  //     type: 'competition',
  //     date: 1654358351,
  //   },
  //   {
  //     id: 4,
  //     title: 'Cours Julien',
  //     type: 'training',
  //     date: 1654358351,
  //   },
  // ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  const events = useSelector((state) => state.events.events);
  return (
    <div className="events">
      {events.length < 1 && <p className="no-event">Il n'y a aucun évènement disponible</p>}
      {events.map((event) => (
        <Link to={`/event/:${event.id}`} state={{ event }} key={event.id}>
          <Event
            key={event.id}
            title={event.title}
            type={event.type}
            date={event.date}
          />
        </Link>
      ))}
    </div>
  );
}

export default Events;
