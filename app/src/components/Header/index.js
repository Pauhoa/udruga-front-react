// import : npm
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import : Local
import './header.scss';
import { ReactComponent as Logo } from '../../assets/udruga-logo.svg';
import { toggleMenu } from '../../actions/navigation';

function Header() {
  const dispatch = useDispatch();

  function handleToggleClick() {
    dispatch(toggleMenu());
  }

  const currentUser = useSelector((state) => state.user.current);
  const userToken = currentUser.token;
  console.log(userToken);
  return (
    <header className="header">
      {
        (userToken)
        && (
        <button
          type="button"
          className="header__button header__button--menu"
          onClick={handleToggleClick}
        >Menu
        </button>
        )
      }
      <Link to="/">
        <Logo className="header__logo" />
      </Link>
      { (!userToken) && (
        <Link to="/login">
          <button
            type="button"
            className="header__button header__button--connect"
          >
            Connexion
          </button>
        </Link>
      )}
      {
        (userToken) && (
          <div className="connected-div">
            <button
              type="button"
              className="header__button header__button--connect"
            >
              Déconnexion
            </button>
          </div>
        )
      }
    </header>
  );
}

export default Header;
