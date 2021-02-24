import React, {FunctionComponent} from 'react';
import TodoListItem from '../todo-list-item/TodoListItem'
import './TodoList.css'

export type TasksType = {
  id: string
  label: string
  isDone: boolean
  important: boolean
}
type TodoListPropsType = {
  filter: string
  todos: Array<TasksType>
  deleteTask: (id: string) => void
  onDoneTask: (id: string, isDone: boolean) => void
}

const TodoList: FunctionComponent<TodoListPropsType> = ({todos, deleteTask, onDoneTask, filter}) => {
  let newTodo = [...todos]
  if (filter === 'active') {
    newTodo = todos.filter(el => !el.isDone)
  } else if (filter === 'done') {
    newTodo = todos.filter(el => el.isDone)
  }
  const liElements = newTodo.map((el) => {
    const {id} = el//разделяем деструктуризацией объект на части(отделяем ID)
    return <li className='list-group-item' key={id}>
      <TodoListItem {...el} deleteTask={deleteTask} onDoneTask={onDoneTask}/>
    </li>//при совпадении пропсов мы можем передать всё спред оператором
  })
  return (
      <ul className='list-group todo-list'>
        {liElements}
      </ul>
  );
};

export default TodoList;
