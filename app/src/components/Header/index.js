// import : npm
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import : Local
import './header.scss';
import { ReactComponent as Logo } from '../../assets/udruga-logo.svg';
import { toggleMenu } from '../../actions/navigation';

function Header() {
  const dispatch = useDispatch();

  function handleToggleClick() {
    dispatch(toggleMenu());
  }
  return (
    <header className="header">
      <button
        type="button"
        className="header__button header__button--menu"
        onClick={handleToggleClick}
      >Menu
      </button>
      <Logo className="header__logo" />
      <Link to="/login">
        <button
          type="button"
          className="header__button header__button--connect"
        >
          Connexion
        </button>
      </Link>
    </header>
  );
}

export default Header;
