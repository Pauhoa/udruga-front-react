// styles
import '../events.scss';
// import local
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as Training } from '../../../assets/training.svg';
import { ReactComponent as Competition } from '../../../assets/competition.svg';
import { ReactComponent as Meeting } from '../../../assets/meeting.svg';

// npm

function Event({
  type,
  title,
  date,
  id,
}) {
  let imageComponent;
  switch (type) {
    case 'Réunion':
      imageComponent = <Meeting className="event__image" />;
      break;
    case 'Activité':
      imageComponent = <Training className="event__image" />;
      break;
    case 'Formation':
      imageComponent = <Competition className="event__image" />;
      break;
    default:
      return {
        imageComponent,
      };
  }

  return (
    <Link to={`/event/${id}`}>
      <div className="event">
        {imageComponent}
        <div className="event__info">
          <h2>{title}</h2>
          <p>{type}</p>
          <p>{`${(new Date(date)).toLocaleDateString('fr')}`}</p>
        </div>
      </div>
    </Link>
  );
}

Event.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Event;
