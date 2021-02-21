import React, {FunctionComponent, useState} from 'react';
import CSS from 'csstype';
import './TodoListItem.css'

type TodoListItemPropsType = {
  label: string
  important: boolean
}

const TodoListItem: FunctionComponent<TodoListItemPropsType> = ({label, important = false}) => {
debugger
const [importantTask,setImportantTask]=useState(important);






const deleteTask=()=>{
  console.log('delete')
}
const addImportantTask=()=>{
  setImportantTask(!importantTask)
}

  const style: CSS.Properties = {
    color: importantTask ? 'steelblue' : 'black',
    fontWeight: importantTask ? 'bold' : 'normal'
  };
  return (
      <span className="todo-list-item">
      <span
          className="todo-list-item-label"
          style={style}>
        {label}
      </span>

      <button onClick={addImportantTask}
              type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button onClick={deleteTask}
          type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
