import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../actions';

const TodoApp = () => {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <h1>Advanced To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

