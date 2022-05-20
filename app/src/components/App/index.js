// import : npm
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import : Local
import './app.scss';

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

function App() {
  const location = useLocation();

  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [location],
  );

  const currentUserRole = useSelector((state) => state.user.current.user.roles);
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Navigation />
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
