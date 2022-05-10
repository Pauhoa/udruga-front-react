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
import Profil from '../Profil';
import EventDetails from '../EventDetails';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/login" element={<UserSettings />} />
        <Route path="/association" element={<Association />} />
        <Route path="/event/details" element={<EventDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
