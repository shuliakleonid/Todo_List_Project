import React, {FunctionComponent} from 'react';
import TodoListItem from '../todo-list-item/TodoListItem'
import './TodoList.css'
export type TasksType = {
  label: string
  important: boolean
  id: number
}
type TodoListPropsType = {
  todos: Array<TasksType>
}

const TodoList: FunctionComponent<TodoListPropsType> = ({todos}) => {

  const liElements = todos.map((el) => {
  const {id, ...itemProps} = el//разделяем деструктуризацией объект на части(отделяем ID)
  return  <li className='list-group-item' key={id}><TodoListItem {...itemProps}/></li>
  })//при совпадении пропсов мы можем передать всё спред оператором

  return (
      <ul className='list-group todo-list'>
        {liElements}
      </ul>
  );
};

export default TodoList;
