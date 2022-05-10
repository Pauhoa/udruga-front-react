/* eslint-disable jsx-a11y/label-has-associated-control */
import Proptypes from 'prop-types';
import { useSelector } from 'react-redux';
import { changeCreateEventField } from '../../actions/createevent';
import './create_event.scss';

function CreateEvent({
  changeCreateEventField
}) {
  const handleChangeCreateEvent = (evt) => {
    changeCreateEventField(evt.target.value, evt.target.name);
  };

  const eventname = useSelector((state) => state.createevent.eventname);
  const categories = useSelector((state) => state.createevent.categories);
  const description = useSelector((state) => state.createevent.description);
  const date = useSelector((state) => state.createevent.date);

  return (
    <form className="create__event">Créer votre événement!
      <input type="text" name="eventname" placeholder="Nom de l'événement" onChange={handleChangeCreateEvent} value={eventname} />
      <label htmlFor="categories">Choisissez une catégorie</label>
      <select value={categories} name="categories" id="categories" onChange={handleChangeCreateEvent}>
        <option value="meeting">Réunion</option>
        <option value="classroom">Cours</option>
        <option value="competition">Compétition</option>
      </select>
      <input type="text" name="description" placeholder="Description de l'événement" onChange={handleChangeCreateEvent} value={description} />
      <input type="date" name="date" placeholder="Date de l'événement" onChange={handleChangeCreateEvent} value={date} />
      <button type="submit"> Créer </button>
    </form>
  );
}
CreateEvent.propTypes = {
  changeCreateEventField: Proptypes.func.isRequired,
};

export default CreateEvent;
