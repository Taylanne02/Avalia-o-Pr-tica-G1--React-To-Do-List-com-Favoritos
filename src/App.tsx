// src/App.tsx

import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { List, type Task } from './components/List';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    setCompletedTasks(completed);
    setPercentage(total > 0 ? (completed / total) * 100 : 0);
  }, [tasks]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="main-container">
      <h1 className="gradient-title">Minha Lista de Tarefas</h1>
      <div className="app-container">
        <List
          tasks={tasks}
          onAddTask={addTask}
          onToggleTask={toggleTask}
        />
        <div className="chart-container">
          <h2>Progresso</h2>
          <div style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              value={percentage}
              text={`${Math.round(percentage)}%`}
              styles={buildStyles({
                textColor: '#000000ff',
                pathColor: '#d4a373',
                trailColor: '#ccc',
              })}
            />
          </div>
          <p>{completedTasks} de {tasks.length} tarefas concluídas</p>
        </div>
      </div>

    </div>
  );
}

export default App;
