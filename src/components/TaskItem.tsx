import { useTasks, type Task } from '../contexts/TaskContext';

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const { toggleTaskDone, toggleTaskFavorite } = useTasks();

  return (
    <li className={task.isDone ? 'done' : ''}>
      <span
        style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
      >
        {task.text}
      </span>
      <div>
        <button onClick={() => toggleTaskDone(task.id)}>
          {task.isDone ? 'Desfazer' : 'Concluir'}
        </button>
        <button onClick={() => toggleTaskFavorite(task.id)}>
          {task.isFavorite ? '❤️' : '🖤'}
        </button>
      </div>
    </li>
  );
}

export default TaskItem;