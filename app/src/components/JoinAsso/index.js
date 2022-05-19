/* eslint-disable jsx-a11y/label-has-associated-control */
// style
import './joinAsso.scss';
// import : npm
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Option from './option';
import { fetchAssos, changeJoinAssoField, joinAssoApi } from '../../actions/joinasso';

function JoinAsso() {
  const dispatch = useDispatch();

  const changeField = (value, name) => {
    dispatch(changeJoinAssoField(value, name));
  };

  const handleChange = (evt) => {
    changeField(parseInt(evt.target.value, 10), evt.target.name);
  };

  const assoId = useSelector((state) => state.joinasso.assoId);

  // au montage du composant on veut récupérer toutes les associations pour permettre
  // à l'utilisateur ( role:user ) d'accéder à la liste des association venant du serveur
  useEffect(() => {
    dispatch(fetchAssos());
  }, []);

  const assosData = useSelector((state) => state.joinasso.allAssos);

  const currentUserId = useSelector((state) => state.user.current.user.id);

  const handleJoinAssoSubmit = (evt) => {
    evt.preventDefault();
    dispatch(joinAssoApi(assoId, currentUserId));
  };

  return (
    <div
      className="join"
    >
      <form
        className="join__section"
        onSubmit={handleJoinAssoSubmit}
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
          {assosData?.map((asso) => (
            <Option name={asso.name} id={asso.id} key={asso.id} />
          ))}
        </select>
        <button type="submit">Rejoindre</button>
      </form>
    </div>
  );
}

export default JoinAsso;
