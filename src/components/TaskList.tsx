import { type Task } from '../contexts/TaskContext';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;