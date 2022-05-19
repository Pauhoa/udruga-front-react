/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector, useDispatch } from 'react-redux';
import { changeCreateAssoField, createAsso } from '../../actions/createAsso';
// styles
import './create_asso.scss';

function CreateAsso() {
  const dispatch = useDispatch();

  const changeField = (value, name) => {
    dispatch(changeCreateAssoField(value, name));
  };

  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(createAsso());
  }

  const assoName = useSelector((state) => state.createAsso.assoName);
  const siren = useSelector((state) => state.createAsso.siren);
  const description = useSelector((state) => state.createAsso.description);
  return (
    <form className="create-asso__form" onSubmit={handleSubmit}>
      <h3> Créez votre association</h3>
      <label htmlFor="assoName">Choisissez un nom pour votre association</label>
      <input
        type="text"
        name="assoName"
        placeholder="Nom de l'association"
        onChange={handleChange}
        value={assoName}
      />
      <label htmlFor="description">
        Un petit mot pour décrire votre association
      </label>
      <textarea
        type="text"
        name="description"
        placeholder="Description de l'association"
        onChange={handleChange}
        value={description}
      />
      <label htmlFor="siren">Indiquez votre numéro de SIREN</label>
      <input
        type="text"
        name="siren"
        placeholder="SIREN"
        onChange={handleChange}
        value={siren}
      />
      <button type="submit"> Créer </button>
    </form>
  );
}

export default CreateAsso;
