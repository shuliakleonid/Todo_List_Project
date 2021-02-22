import React, {useState} from 'react';
import AppHeader from '../app-header/AppHeader';
import SearchPanel from '../search-panel/SearchPanel';
import TodoList, {TasksType} from '../todo-list/TodoList';
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter';
import './App.css'

const App = () => {
  const todoData: Array<TasksType> = [
    {label: 'Drink Coffee', important: false, id: 1, isDone: false},
    {label: 'Make Awesome App', important: true, id: 2, isDone: true},
    {label: 'Have a lunch', important: false, id: 3, isDone: false},
  ]
  const [todo, setTodo] = useState<Array<TasksType>>(todoData)


  const deleteTask = (id: number) => {
    setTodo(todo.filter(el => el.id !== id ? {...el} : ''))
  }
  const onDoneTask = (id:number)=>{
    setTodo(todo.map(el=>el.id===id?{...el,isDone:true}:{...el}))
  }
  const sortTasks = (filter: string) => {
    let newTodo={...todoData}
    if(filter==='active'){
      return setTodo( todoData.filter(el => !el.isDone))
    }
    if(filter==='done'){
      return setTodo(  todoData.filter(el => el.isDone))
    }
    if(filter==='all'){
     return setTodo(todoData)
    }

   // return setTodo(newTodo)
  }

  return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter sortTasks={sortTasks}/>
        </div>
        <TodoList todos={todo} deleteTask={deleteTask} onDoneTask={onDoneTask}/>
      </div>
  );
}

export default App;
