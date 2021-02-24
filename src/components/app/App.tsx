import React, {useState} from 'react';
import AppHeader from '../app-header/AppHeader';
import SearchPanel from '../search-panel/SearchPanel';
import TodoList, {TasksType} from '../todo-list/TodoList';
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter';
import './App.css'
import ItemAddForm from '../item-add-form/ItemAddForm';
import {v1} from 'uuid';

const App = () => {
  const createTodoItem = (text: string): TasksType => {
    return {
      label: text,
      important: false,
      id: v1(),
      isDone: false
    }
  }//функция создания таски
  const todoData: Array<TasksType> = [
    createTodoItem('Drink Coffee'),
    createTodoItem('Make Awesome App'),
    createTodoItem('Have a lunch'),
  ]//массив тасок(изначальный)
  const [todo, setTodo] = useState<Array<TasksType>>(todoData)//массив тасок
  const [filter, setFilter] = useState('all')
  const deleteTask = (id: string) => {
    setTodo(todo.filter(el => el.id !== id ? {...el} : ''))
  } //удаляем таску
  const onDoneTask = (id: string, isDone: boolean) => {
    setTodo(todo.map(el => el.id === id ? {...el, isDone: !isDone} : {...el}))
  } //зачеркиваем таску когда выполнена
  const onAddNewTask = (label: string) => {
    const newTask: TasksType = createTodoItem(label)
    setTodo([...todo, newTask])
  }//добавляем новую таску
  const sortTasks = (filter: string) => {
    switch (filter) {
        // case 'all':
        // return setFilter('all');
      case 'active':
        return setFilter('active')
      case 'done':
        return setFilter('done')
      default:
        return setFilter('all')
    }
  }// фильтруем элементы по флагу
  const searchForm = (value: string) => {
    console.log('Поиск', todo.filter(el => el.label.toLowerCase().indexOf(value) > -1))

    // setTodo(todo.filter(el => el.label.toLowerCase().indexOf(value) > -1))
    setTodo(todoData.filter(el => el.label.toLowerCase().indexOf(value) > -1))
  }//поиск по значению

  let onToggleDone = todo.filter(el => el.isDone)
  let onToggleNotDone = todo.filter(el => !el.isDone)
  return (
      <div className="todo-app">
        <AppHeader toDo={onToggleNotDone.length} done={onToggleDone.length}/>
        <div className="top-panel d-flex">
          <SearchPanel searchForm={searchForm}/>
          <ItemStatusFilter sortTasks={sortTasks} filter={filter}/>
        </div>
        <TodoList todos={todo} filter={filter} deleteTask={deleteTask} onDoneTask={onDoneTask}/>
        <ItemAddForm onAddNewTask={onAddNewTask}/>
      </div>
  );
}

export default App;
