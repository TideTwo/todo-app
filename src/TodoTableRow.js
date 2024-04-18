import React, { useState } from 'react';

export default function TodoTableRow({
  todoRemover,
  todoEditor,
  todo,
  rowNum,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleDelete() {
    todoRemover(todo.id);
  }

  function handleEdit(editType, newVal) {
    todoEditor(todo.id, editType, newVal);
  }

  return (
    <tr
      key={todo.id}
      className={isHovered ? 'hovered' : ''}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
    >
      <td className="num">{rowNum}.</td>
      <td
        style={{ color: todo.isCompleted ? 'green' : 'red' }}
        onDoubleClick={() => {
          setIsEditing(true);
        }}
      >
        {!isEditing ? (
          <span>{todo.title}</span>
        ) : (
          <input
            type="text"
            autoFocus
            defaultValue={todo.title}
            onBlur={(e) => {
              handleEdit('title', e.target.value);
              setIsEditing(false);
            }}
          />
        )}
      </td>
      <td>
        <button
          onClick={() => {
            handleEdit('isCompleted', !todo.isCompleted);
          }}
          style={{
            backgroundColor: todo.isCompleted ? 'green' : 'red',
          }}
        >
          {todo.isCompleted ? 'Completed' : 'Ongoing'}
        </button>
      </td>
      <td>
        <button onClick={handleDelete} className="delete">
          x
        </button>
      </td>
    </tr>
  );
}
