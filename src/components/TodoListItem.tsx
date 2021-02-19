import React, {FunctionComponent} from 'react';

type TodoListItemPropsType = {
  label: string
  important: boolean
}

const TodoListItem: FunctionComponent<TodoListItemPropsType> = ({label, important = false}) => {
  const style = {
    color: important ? 'tomato' : 'black'
  }
  return <span style={style}>{label}</span>

};

export default TodoListItem;
