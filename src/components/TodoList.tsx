import React from 'react';
import TodoListItem from './TodoListItem'
const TodoList = () => {
const items = ['Learn', 'React', 'More']
  const li = items.map(el=><li><TodoListItem title={el}/></li>)
  return (
      <ul>
        {li}
      </ul>
  );
};

export default TodoList;
