/* eslint-disable jsx-a11y/label-has-associated-control */
// style
import './joinAsso.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeJoinAssoField } from '../../actions/joinasso';

function JoinAsso() {
  const assosData = [
    {
      association_id: 1,
      name_asso: 'Liffré basket club',
    },
    {
      association_id: 2,
      name_asso: 'Association Echec 23',
    },
    {
      association_id: 3,
      name_asso: 'Club Cycliste ',
    },
    {
      association_id: 4,
      name_asso: 'Alcooliques anonymes',
    },
    {
      association_id: 5,
      name_asso: 'Escrime 22',
    },
  ];

  const dispatch = useDispatch();

  const changeField = (value, name) => {
    dispatch(changeJoinAssoField(value, name));
  };

  const handleChange = (evt) => {
    changeField(parseInt(evt.target.value, 10), evt.target.name);
  };

  const assoId = useSelector((state) => state.joinasso.assoId);

  return (
    <div
      className="join"
    >
      <form
        className="join__section"
      >
        <h2
          className="join__title"
        >Rejoindre une Association
        </h2>
        <select
          value={assoId}
          name="assoId"
          id="asso-select"
          onChange={handleChange}
        >
          <option selected disabled>Chosissez votre association</option>
          {assosData.map((asso) => (
            <option
              key={asso.association_id}
              value={asso.association_id}
            >
              {asso.name_asso}
            </option>
          ))}
        </select>
        <button type="submit">Rejoindre</button>
      </form>
    </div>
  );
}

export default JoinAsso;
