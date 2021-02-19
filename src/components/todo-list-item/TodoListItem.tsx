import React, {FunctionComponent} from 'react';
import CSS from 'csstype';
import './TodoListItem.css'

type TodoListItemPropsType = {
  label: string
  important: boolean
}

const TodoListItem: FunctionComponent<TodoListItemPropsType> = ({label, important = false}) => {
  const style: CSS.Properties = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
      <span className="todo-list-item">
      <span
          className="todo-list-item-label"
          style={style}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
