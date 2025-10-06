import { useState } from 'react';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface ListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onAddTask: (text: string) => void;
}

export function List({ tasks, onToggleTask, onAddTask }: ListProps) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTaskClick = () => {
    if (inputValue.trim() === '') return;
    onAddTask(inputValue);
    setInputValue('');
  };

  return (
    <div className="notepad">
      <div className="notepad-header">
        <h1>Minhas Tarefas</h1>
      </div>
      <div className="notepad-body">
        <div className="input-group">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Adicionar nova tarefa..."
            onKeyDown={(e) => e.key === 'Enter' && handleAddTaskClick()}
          />
          <button onClick={handleAddTaskClick}>Adicionar</button>
          
        </div>
        <ul className="task-list">
          {tasks.map(task => (
            <li
              key={task.id}
              className={task.completed ? 'completed' : ''}
              onClick={() => onToggleTask(task.id)}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}