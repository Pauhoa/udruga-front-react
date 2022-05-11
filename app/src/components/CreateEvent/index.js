/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { changeCreateEventField } from '../../actions/createEvent';
import './create_event.scss';

function CreateEvent() {
  const dispatch = useDispatch();

  const changeField = (value, name) => {
    dispatch(changeCreateEventField(value, name));
  };

  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const eventName = useSelector((state) => state.createEvent.eventName);
  const categories = useSelector((state) => state.createEvent.categories);
  const description = useSelector((state) => state.createEvent.description);
  const date = useSelector((state) => state.createEvent.date);

  return (
    <form className="create-event__form">Créer votre évènement
      <label htmlFor="eventName">Choisissez un nom pour votre évènement</label>
      <input
        type="text"
        name="eventName"
        placeholder="Nom de l'évènement"
        onChange={handleChange}
        value={eventName}
      />
      <label htmlFor="categories">Choisissez une catégorie</label>
      <select
        value={categories}
        name="categories"
        id="categories"
        onChange={handleChange}
      >
        <option value="meeting">Réunion</option>
        <option value="training">Cours</option>
        <option value="competition">Compétition</option>
      </select>
      <label htmlFor="description">Décrivez votre évènement</label>
      <textarea
        type="text"
        name="description"
        placeholder="Description de l'évènement"
        onChange={handleChange}
        value={description}
      />
      <label htmlFor="date">Date de votre évènement</label>
      <input
        type="date"
        name="date"
        placeholder="Date de l'évènement"
        onChange={handleChange}
        value={date}
      />
      <button type="submit"> Créer </button>
    </form>
  );
}

export default CreateEvent;
