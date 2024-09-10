import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ContactPage from './pages/ContactPage';
import ChartMapPage from './pages/ChartMapPage';
import Sidebar from './components/SideBar';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
      <Sidebar />
        <div className="container ml-32 px-32">
          <Routes>
            <Route path="/" element={<ContactPage />} />
            <Route path="/charts" element={<ChartMapPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
