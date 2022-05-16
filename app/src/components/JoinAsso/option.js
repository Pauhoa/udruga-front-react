// styles
import './joinAsso.scss';
// npm
import PropTypes from 'prop-types';

function Option({ name, id }) {
  return (
    <option
      key={id}
      value={id}
    >
      {name}
    </option>
  );
}

Option.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Option;
