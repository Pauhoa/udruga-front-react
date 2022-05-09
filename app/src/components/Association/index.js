// import : npm

// import : Local

// import Style
import './association.scss';
import { ReactComponent as CalendarSvg } from '../../assets/calendar.svg';
import { ReactComponent as EventSvg } from '../../assets/event.svg';

function Association() {
  return (
    <div className="asso">
      <div className="asso__info">
        <h2 className="asso__info--title">Nom Asso</h2>
        <p className="asso__info--descritption">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
      </div>
      <div className="asso__events">
        <div className="asso__events--card">
          <h3>Les événements</h3>
          <EventSvg className="asso__events--card__svg" />
        </div>
        <div className="asso__events--card">
          <h3>Mes participations</h3>
          <CalendarSvg className="asso__events--card__svg" />
        </div>
      </div>
      <button type="button" className="button__unsub">
        Se désinscrire
      </button>
    </div>
  );
}

export default Association;
