// import : npm
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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

function App() {
  const location = useLocation();

  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [location],
  );

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserSettings />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/association" element={<Association />} />
          <Route path="/events" element={<Events />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/team" element={<Team />} />
          <Route path="/create-asso" element={<CreateAsso />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
