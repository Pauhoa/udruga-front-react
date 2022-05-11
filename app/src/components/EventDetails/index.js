// import
import PropTypes from 'prop-types';

// import Style
import './eventDetails.scss';

// Datas
import eventsList from '../../data/events';

console.log(eventsList);

function EventDetails(eventsList) {
  return (
    <ul className="events">
      {eventsList.map((eventDetails) => (
        <li className="event__info--title" key={id}>{title}
        <span className="event__info--category">
        {type}
        </span> {description}
      </li>
      ))}
    </ul>
  );

// <div className="events">
//   <div className="event__info">
//     <h2 className="event__info--title">{title}</h2>
//     <div className="event__info--category">{type}</div>
//     <div className="event__info--date">Date</div>
//     <p className="asso__info--description">{description}</p>
//   </div>
//   <button type="button" className="button__unsub">
//     S'inscrire
//   </button>
// </div>
// );
}

EventDetails.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
   };

export default EventDetails;
