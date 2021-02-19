import React, {FunctionComponent} from 'react';

type TodoListItemPropsType = {
  title:string
}

const TodoListItem:FunctionComponent<TodoListItemPropsType> = ({title}) => {

  return <span>{title}</span>

};

export default TodoListItem;
