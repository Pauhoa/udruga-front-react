// import : npm
import { Routes, Route } from 'react-router-dom';
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

function App() {
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
