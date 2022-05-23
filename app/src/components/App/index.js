// import : npm
import {
  Routes, Route, useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import : Local
import './app.scss';
import { saveUser } from '../../actions/user';
// import : Components
import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Home from '../Home';
import UserSettings from '../UserSettings';
import Association from '../Association';
import Events from '../Events';
import CreateEvent from '../CreateEvent';
import Profile from '../Profile';
import Team from '../Team';
import CreateAsso from '../CreateAsso';
import EventDetails from '../EventDetails';
import Error from '../Error';
import Loading from '../Loading';

function App() {
  const location = useLocation();

  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [location],
  );

  const dispatch = useDispatch();

  function loadFromLocalStorage() {
    try {
      const userFromLS = localStorage.getItem('user');
      if (userFromLS === null) return undefined;
      dispatch(saveUser(JSON.parse(userFromLS)));
      return 'ok';
    }
    catch (e) {
      console.warn(e);
      return undefined;
    }
  }

  useEffect(
    () => {
      loadFromLocalStorage();
    },
    [],
  );

  const loading = useSelector((state) => state.app.loading);

  const currentUserRole = useSelector((state) => state.user.current.user.roles);
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Navigation />
        {}
        { loading ? <Loading />
          : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/login" element={<UserSettings />} />
              {
              (currentUserRole[0] === 'ROLE_ADMIN' || currentUserRole[0] === 'ROLE_USER') && (
                <>
                  <Route path="/profil" element={<Profile />} />
                  <Route path="/association" element={<Association />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/event/:id" element={<EventDetails />} />
                </>
              )
            }
              {
              (currentUserRole[0] === 'ROLE_ADMIN') && (
                <>
                  <Route path="/create-asso" element={<CreateAsso />} />
                  <Route path="/create-event" element={<CreateEvent />} />
                </>
              )

            }
              <Route path="*" element={<Error />} />
            </Routes>
          )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
