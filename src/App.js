import AddTodo from './AddTodo';
import { useState } from 'react';
import TodoTable from './TodoTable';

import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  function todoAdder(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function todoRemover(todoId) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  function todoEditor(targetId, changeType, newVal) {
    console.log(targetId, changeType, newVal);
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id !== targetId
          ? prevTodo
          : { ...prevTodo, [changeType]: newVal },
      ),
    );
  }

  return (
    <div className="App">
      <AddTodo todoAdder={todoAdder} todos={todos} />
      <TodoTable
        todoRemover={todoRemover}
        todoEditor={todoEditor}
        todos={todos}
      />
    </div>
  );
}
