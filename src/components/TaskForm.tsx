import { useState } from 'react';
import { useTasks } from '../contexts/TaskContext';

function TaskForm() {
  const [text, setText] = useState('');
  const { addTask } = useTasks(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;