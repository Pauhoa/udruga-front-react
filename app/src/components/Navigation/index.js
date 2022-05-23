// import npm
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// styles
import './navigation.scss';
import { fetchEvents } from '../../actions/events';
import { toggleLoading } from '../../actions/app';

function Navigation() {
  const isOpen = useSelector((state) => state.navigation.isOpen);
  const userToken = useSelector((state) => state.user.current.token);

  const dispatch = useDispatch();
  const handleFetchEvents = () => {
    dispatch(toggleLoading());
    dispatch(fetchEvents());
  };
  if (userToken) {
    return (
      <nav className={isOpen ? 'navigation' : 'navigation-closed'}>
        <NavLink
          to="/profil"
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
          onClick={handleFetchEvents}
        >Evènements
        </NavLink>
      </nav>
    );
  }
}
export default Navigation;
