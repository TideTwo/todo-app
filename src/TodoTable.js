import React from 'react';
import TodoTableRow from './TodoTableRow';

export default function TodoTable({ todoRemover, todoEditor, todos }) {
  return (
    <table>
      <thead>
        <tr>
          <td> </td>
          <td>Title</td>
          <td>Status</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, i) => (
          <TodoTableRow
            key={todo.id}
            todoRemover={todoRemover}
            todoEditor={todoEditor}
            todo={todo}
            rowNum={i + 1}
          ></TodoTableRow>
        ))}
      </tbody>
    </table>
  );
}
