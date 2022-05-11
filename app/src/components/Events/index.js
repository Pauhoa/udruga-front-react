// styles
import './events.scss';

import Event from './Event';

function Events() {
  const events = [
    {
      id: 1,
      title: 'Rendez-vous annuel',
      type: 'meeting',
      date: 1654358351,
    },
    {
      id: 2,
      title: 'Entraînement Cadets',
      type: 'training',
      date: 1654358351,
    },
    {
      id: 3,
      title: 'Match vs US-METZ',
      type: 'competition',
      date: 1654358351,
    },
    {
      id: 4,
      title: 'Cours Julien',
      type: 'training',
      date: 1654358351,
    },
  ];

  return (
    <div className="events">
      {events.map((event) => (
        <Event
          key={event.id}
          title={event.title}
          type={event.type}
          date={event.date}
        />
      ))}
    </div>
  );
}

export default Events;