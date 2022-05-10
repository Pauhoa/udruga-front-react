// styles
import '../events.scss';
// import local
import { PropTypes } from 'prop-types';
import { ReactComponent as Training } from '../../../assets/training.svg';
import { ReactComponent as Competition } from '../../../assets/competition.svg';
import { ReactComponent as Meeting } from '../../../assets/meeting.svg';
// npm

function Event({
  type,
  title,
  date,
}) {
  let imageComponent = null;
  let typeParagraphe = null;
  switch (type) {
    case 'meeting':
      imageComponent = <Meeting className="event__image" />;
      typeParagraphe = <p>Réunion</p>;
      break;
    case 'training':
      imageComponent = <Training className="event__image" />;
      typeParagraphe = <p>Entraînement</p>;
      break;
    case 'competition':
      imageComponent = <Competition className="event__image" />;
      typeParagraphe = <p>Compétition</p>;
      break;
    default:
      return {
        imageComponent,
      };
  }

  return (
    <div className="event">
      {imageComponent}
      <div className="event__info">
        <h2>{title}</h2>
        {typeParagraphe}
        <p>{`${(new Date(date)).toLocaleDateString('fr')} à ${(new Date(date)).toLocaleTimeString('fr')}`}</p>
      </div>
    </div>
  );
}

Event.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default Event;
