import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layouts';
import { EventListPage } from './pages/event/list';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/event/list" replace />} />
          <Route path="/event/list" element={<EventListPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
