// import : npm
import { Routes, Route } from 'react-router-dom';
// import : Local
import './app.scss';

// import : Components
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import UserSettings from '../UserSettings';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserSettings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
