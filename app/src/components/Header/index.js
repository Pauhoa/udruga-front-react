// import : npm
import { Link } from 'react-router-dom';

// import : Local
import './header.scss';
import { ReactComponent as Logo } from '../../assets/udruga-logo.svg';

function Header() {
  return (
    <header className="header">
      <button type="button" className="header__button header__button--menu">Menu</button>
      <Logo className="header__logo" />
      <Link to="/login">
        <button
          type="button"
          className="header__button header__button--connect"
        >
          Se connecter
        </button>
      </Link>
    </header>
  );
}

export default Header;
