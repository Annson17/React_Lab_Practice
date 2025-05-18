import React, { useState } from 'react';
import './App.css';

const ReminderApp = () => {
  // State for storing all tasks
  const [tasks, setTasks] = useState([]);
  // State for input fields
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  // Filter: 'all', 'done', 'not-done'
  const [filter, setFilter] = useState('all');

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (!name || !date) return;

    const task = {
      id: Date.now(),
      name,
      date,
      done: false,
    };

    setTasks([...tasks, task]);
    setName('');
    setDate('');
  };

  // Toggle task completion
  const toggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  // Apply filter
  const shownTasks = tasks.filter((task) => {
    if (filter === 'done') return task.done;
    if (filter === 'not-done') return !task.done;
    return true;
  });

  return (
    <div>
      <h2>Reminder App</h2>

      {/* Add Task Form */}
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Filter Buttons */}
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not-done')}>Not Done</button>
      </div>

      {/* Task List */}
      <ul>
        {shownTasks.map((task) => (
          <li key={task.id}>
            {task.name} - {task.date}
            <button onClick={() => toggleTask(task.id)}>
              {task.done ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderApp;
