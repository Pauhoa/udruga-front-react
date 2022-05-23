// import : npm
import { NavLink } from 'react-router-dom';

// styles
import './footer.scss';

function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="footer">
      <NavLink
        to="/legale-notice"
        className={
          ({ isActive }) => (isActive ? 'footer__link footer__link--active' : 'footer__link')
        }
      >
        Mentions Légales
      </NavLink>
      <NavLink
        to="/terms-of-servicii"
        className={
          ({ isActive }) => (isActive ? 'footer__link footer__link--active' : 'footer__link')
        }
      >
        Conditions générales d'utilisation
      </NavLink>
      <NavLink
        to="/team"
        className={
          ({ isActive }) => (isActive ? 'footer__link footer__link--active' : 'footer__link')
        }
      >
        Team
      </NavLink>
      <p className="footer__copyright">Copyright {year}</p>
    </footer>
  );
}

export default Footer;
