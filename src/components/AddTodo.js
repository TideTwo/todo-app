import React, { useState } from 'react';

export default function AddTodo({ todoAdder, todos }) {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoIsCompleted, setTodoIsCompleted] = useState(false);

  function handleTitleChange(newTitle) {
    setTodoTitle(newTitle);
  }

  function handleCheckedChange(e) {
    setTodoIsCompleted(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todoTitle !== '') {
      todoAdder({
        title: todoTitle,
        isCompleted: todoIsCompleted,
        id: Date.now(),
      });

      setTodoTitle('');
      setTodoIsCompleted(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add todo</h2>
      Title:
      <br />
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => {
          handleTitleChange(e.target.value);
        }}
      />
      <br />
      Completion status:
      <br />
      <input
        type="checkbox"
        checked={todoIsCompleted}
        onChange={handleCheckedChange}
      />
      <br />
      <button type="submit">Add Todo</button>
    </form>
  );
}
