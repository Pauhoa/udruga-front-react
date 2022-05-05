// import : npm

// import : Local
import './header.scss';
import { ReactComponent as Logo } from '../../assets/udruga-logo.svg';

function Header() {
  return (
    <header className="header">
      <button type="button" className="header__button header__button--menu">Menu</button>
      <Logo className="header__logo" />
      <button type="button" className="header__button header__button--connect">Se connecter</button>
    </header>
  );
}

export default Header;
