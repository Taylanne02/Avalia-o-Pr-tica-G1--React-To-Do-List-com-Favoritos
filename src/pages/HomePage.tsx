// src/pages/HomePage.tsx

import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useTasks } from '../contexts/TaskContext';

function HomePage() {
  const { tasks } = useTasks();

  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  );
}

export default HomePage;