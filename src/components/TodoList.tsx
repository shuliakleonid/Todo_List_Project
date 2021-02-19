import React from 'react';

const TodoList = () => {
const items = ['Learn', 'React', 'More']
  const li = items.map(el=><li>{el}</li>)
  return (
      <ul>
        {li}
      </ul>
  );
};

export default TodoList;
