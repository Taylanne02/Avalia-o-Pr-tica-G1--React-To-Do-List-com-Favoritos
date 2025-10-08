// src/pages/FavoritesPage.tsx
import TaskList from '../components/TaskList';
import { useTasks } from '../contexts/TaskContext';

function FavoritesPage() {
  const { tasks } = useTasks();

  // Filtra para mostrar apenas as tarefas favoritas
  const favoriteTasks = tasks.filter(task => task.isFavorite);

  return (
    <>
      <h2>Suas Tarefas Favoritas</h2>
      <TaskList tasks={favoriteTasks} />
    </>
  );
}

export default FavoritesPage;