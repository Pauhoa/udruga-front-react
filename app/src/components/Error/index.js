// styles
import './error.scss';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="error">
      <h2>404</h2>
      <p>Cette page n'est pas disponible.</p>
      <Link to="/">
        <button type="button">Retourner à l'accueil</button>
      </Link>
    </div>
  );
}

export default Error;
