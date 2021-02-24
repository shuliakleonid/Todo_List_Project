import React, {FunctionComponent} from 'react';
import TodoListItem from '../todo-list-item/TodoListItem'
import './TodoList.css'

export type TasksType = {
  id: number
  label: string
  isDone: boolean
  important: boolean
}
type TodoListPropsType = {
  todos: Array<TasksType>
  deleteTask: (id: number) => void
  onDoneTask:(id: number,isDone:boolean) => void
}

const TodoList: FunctionComponent<TodoListPropsType> = ({todos, deleteTask,onDoneTask}) => {


  const liElements = todos.map((el) => {
    const {id} = el//разделяем деструктуризацией объект на части(отделяем ID)
    return <li className='list-group-item' key={id}><TodoListItem {...el} deleteTask={deleteTask} onDoneTask={onDoneTask}/></li>
  })//при совпадении пропсов мы можем передать всё спред оператором

  return (
      <ul className='list-group todo-list'>
        {liElements}
      </ul>
  );
};

export default TodoList;
