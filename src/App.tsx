import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import Header from './components/Header';
import Notification from './components/Notification';
import { useTasks } from './contexts/TaskContext';

function App() {
  const { notification } = useTasks();

  return (
    <>
      <Header />
      <Notification message={notification} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favoritos" element={<FavoritesPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;