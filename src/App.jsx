import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './store/counterSlice';
import { addTodo, toggleTodo } from './store/todosSlice';

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');
  const completed = todos.filter((todo) => todo.completed).length;

  function handleAddTodo(event) {
    event.preventDefault();
    if (!newTodo.trim()) return;
    dispatch(addTodo(newTodo.trim()));
    setNewTodo('');
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-mark">R</span> Redux Lab</div>
        <span className="tag">Day 36 · Redux Toolkit</span>
      </header>

      <main className="container">
        <div className="intro">
          <span className="eyebrow">REACT STATE MANAGEMENT</span>
          <h1>One store. Two features.</h1>
          <p>Use Redux Toolkit to manage a counter and a task list independently.</p>
        </div>

        <section className="dashboard">
          <article className="panel counter-panel">
            <div className="panel-head"><div><span className="eyebrow">COUNTER SLICE</span><h2>Counter</h2></div><span className="chip">useSelector</span></div>
            <div className="count-box"><span className="count-label">Current count</span><strong aria-live="polite">{count}</strong><span className="count-hint">Updated through Redux actions</span></div>
            <div className="counter-actions">
              <button className="button secondary" onClick={() => dispatch(decrement())}>− Decrement</button>
              <button className="button primary" onClick={() => dispatch(increment())}>+ Increment</button>
            </div>
            <button className="button ghost" onClick={() => dispatch(reset())}>Reset counter</button>
          </article>

          <article className="panel todo-panel">
            <div className="panel-head"><div><span className="eyebrow">TODOS SLICE</span><h2>My Tasks</h2></div><span className="chip">{completed} / {todos.length} done</span></div>
            <form className="todo-form" onSubmit={handleAddTodo}>
              <input aria-label="New task" type="text" placeholder="What do you need to do?" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
              <button className="button primary" type="submit">Add task</button>
            </form>
            <div className="progress-track"><div className="progress-fill" style={{width: `${todos.length ? (completed / todos.length) * 100 : 0}%`}} /></div>
            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id}>
                  <label className={todo.completed ? 'todo done' : 'todo'}>
                    <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
                    <span>{todo.text}</span>
                  </label>
                </li>
              ))}
            </ul>
            <p className="helper">Check a task to toggle its completed state.</p>
          </article>
        </section>
        <footer>Two Redux slices · One combined store · Day 36</footer>
      </main>
    </div>
  );
}