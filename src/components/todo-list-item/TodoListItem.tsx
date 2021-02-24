import React, {FunctionComponent, useState} from 'react';
import CSS from 'csstype';
import './TodoListItem.css'

type TodoListItemPropsType = {
  id: string
  isDone:boolean
  label: string
  important: boolean
  deleteTask: (id: string) => void
  onDoneTask:(id: string,isDone:boolean) => void
}

const TodoListItem: FunctionComponent<TodoListItemPropsType> = ({id, label, deleteTask,onDoneTask, isDone,important = false}) => {
  const [importantTask, setImportantTask] = useState<boolean>(important);
  const onLabelClick=(id:string)=>{
    onDoneTask(id,isDone)
  }
  const onDeleteTask = (id: string) => {
    deleteTask(id)
  }
  const onImportantTask = () => {
    setImportantTask(!importantTask)
  }
  const style: CSS.Properties = {
    color: importantTask ? 'steelblue' : 'black',
    fontWeight: importantTask ? 'bold' : 'normal'
  };
  let doneStyle= isDone ? 'todo-list-item-label done':'todo-list-item-label'
  return (
      <span className="todo-list-item">
        <span
            onClick={()=>onLabelClick(id)}
            className={`${doneStyle}`}
            style={style}>
        {label}
       </span>
        <span className='button-section'>
            <button onClick={onImportantTask}
                    type="button"
                    className="btn btn-outline-success btn-sm float-right">
                   <i className="fa fa-exclamation"/>
            </button>
            <button onClick={() => onDeleteTask(id)}
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"/>
            </button>
        </span>
      </span>
  );
};

export default TodoListItem;
