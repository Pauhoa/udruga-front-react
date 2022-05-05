// import : npm

// import : Local
import './header.scss';

function Header() {
  return (
    <header className="header">
      <button type="button" className="header__burger">+</button>
      <img src="https://www.flaticon.com/fr/icones-gratuites/association" alt="Udruga logo" className="header__logo" />
      <button type="button" className="header__button">Se connecter</button>
    </header>
  );
}

export default Header;
