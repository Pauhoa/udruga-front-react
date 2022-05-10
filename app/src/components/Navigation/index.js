// import npm
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// styles
import './navigation.scss';

function Navigation() {
  const isOpen = useSelector((state) => state.navigation.isOpen);

  return (
    <nav className={isOpen ? 'navigation' : 'navigation-closed'}>
      <NavLink
        to="/"
        className={
          ({ isActive }) => (isActive ? 'navigation__link navigation__link--active' : 'navigation__link')
          }
      >Profil
      </NavLink>
      <NavLink
        to="/association"
        className={
          ({ isActive }) => (isActive ? 'navigation__link navigation__link--active' : 'navigation__link')
          }
      >Association
      </NavLink>
      <NavLink
        to="/events"
        className={
          ({ isActive }) => (isActive ? 'navigation__link navigation__link--active' : 'navigation__link')
          }
      >Evènements
      </NavLink>
    </nav>
  );
}
export default Navigation;
