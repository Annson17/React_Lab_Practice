import { useState } from 'react';

function ToDoFunction() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Add task
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput('');
    }
  };

  // Toggle task status
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>To-Do List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, i) => (
          <li key={i} style={{
            margin: '10px',
            textDecoration: task.done ? 'line-through' : 'none',
            color: task.done ? 'gray' : 'black'
          }}>
            <span onClick={() => toggleTask(i)} style={{ cursor: 'pointer' }}>
              {i + 1}. {task.text}
            </span>
            <button onClick={() => deleteTask(i)} style={{ marginLeft: '10px',backgroundColor:'red' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoFunction;
