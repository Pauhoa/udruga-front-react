/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { changeCreateEventField, createEvent } from '../../actions/createEvent';
// styles
import './create_event.scss';

function CreateEvent() {
  const dispatch = useDispatch();

  const changeField = (value, name) => {
    dispatch(changeCreateEventField(value, name));
  };

  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(createEvent());
  }

  const eventName = useSelector((state) => state.createEvent.eventName);
  const categories = useSelector((state) => state.createEvent.categories);
  const description = useSelector((state) => state.createEvent.description);
  const date = useSelector((state) => state.createEvent.date);

  return (
    <form
      className="create-event__form"
      onSubmit={handleSubmit}
    >
      <h3>Créer votre évènement</h3>
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
        <option value="Réunion">Réunion</option>
        <option value="Activité">Activité</option>
        <option value="Formation">Formation</option>
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
