import React, {FunctionComponent} from 'react';
import TodoListItem from './TodoListItem'

export type TasksType = {
  label: string
  important: boolean
  id: number
}
type TodoListPropsType = {
  data: Array<TasksType>
}

const TodoList: FunctionComponent<TodoListPropsType> = ({data}) => {

  const liElements = data.map((el) => {
  const {id, ...itemProps} = el//разделяем деструктуризацией объект на части(отделяем ID)
  return  <li key={id}><TodoListItem {...itemProps}/></li>
  })//при совпадении пропсов мы можем передать всё спред оператором

  return (
      <ul>
        {liElements}
      </ul>
  );
};

export default TodoList;
