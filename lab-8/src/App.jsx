import React, { useState } from 'react';
import "./App.css"

const ReminderApp = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    if (!name || !date) return;
    const newTask = { id: Date.now(), name, date, done: false };
    setTasks([...tasks, newTask]);
    setName('');
    setDate('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const shownTasks = tasks.filter(t =>
    filter === 'done' ? t.done : filter === 'not-done' ? !t.done : true
  );

  return (
    <div>
      <h2>Reminder App</h2>
      <form onSubmit={addTask}>
        <input placeholder="Task" value={name} onChange={e => setName(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button>Add</button>
      </form>

      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not-done')}>Not Done</button>
      </div>

      <ul>
        {shownTasks.map(t => (
          <li key={t.id}>
            {t.name} - {t.date}
            <button onClick={() => toggleTask(t.id)}>
              {t.done ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderApp;
