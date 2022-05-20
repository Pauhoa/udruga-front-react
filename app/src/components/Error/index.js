// styles
import './error.scss';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="error">
      <div className="h2-div">
        <div className="h2-div__404">404</div>
      </div>
      <p>Cette page n'est pas disponible.</p>
      <Link to="/">
        <button type="button">Retourner à l'accueil</button>
      </Link>
    </div>
  );
}

export default Error;
