import { Route, Routes } from 'react-router-dom';

import HomePage from './components/pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/news" element={<NewsPage />} />
      <Route path="/employees" element={<EmployeesPage />} />
      <Route path="/events" element={<EventsPage />} /> */}
    </Routes>
  );
}

export default App;
