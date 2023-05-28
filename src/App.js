import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';

const App = ({ todos, addTodo, toggleTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (index) => {
    toggleTodo(index);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleTodo(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
