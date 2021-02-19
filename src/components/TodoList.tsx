import React, {FunctionComponent} from 'react';
import TodoListItem from './TodoListItem'

export type TasksType = {
  label: string
  important: boolean
}
type TodoListPropsType = {
  data: Array<TasksType>
}

const TodoList: FunctionComponent<TodoListPropsType> = ({data}) => {
  const liElements = data.map((el, i) => <li key={i}><TodoListItem {...el}/></li>)//при совпадении пропсов мы можем передать всё спред оператором

  return (
      <ul>
        {liElements}
      </ul>
  );
};

export default TodoList;
