import React, {ChangeEvent, useState} from 'react';
import AppHeader from '../app-header/AppHeader';
import SearchPanel from '../search-panel/SearchPanel';
import TodoList, {TasksType} from '../todo-list/TodoList';
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter';
import './App.css'
import ItemAddForm from '../item-add-form/ItemAddForm';

const App = () => {
  const todoData: Array<TasksType> = [
    {label: 'Drink Coffee', important: false, id: 1, isDone: false},
    {label: 'Make Awesome App', important: true, id: 2, isDone: true},
    {label: 'Have a lunch', important: false, id: 3, isDone: false},
  ]
  const [todo, setTodo] = useState<Array<TasksType>>(todoData)

  const deleteTask = (id: number) => {
    const newTodo = [...todo]
    console.log('delete',newTodo.filter(el => el.id !== id ? {...el} : ''))
    setTodo(newTodo.filter(el => el.id !== id ? {...el} : ''))
  }
  const onDoneTask = (id:number)=>{
    const newTodo = [...todo]
    console.log('done',newTodo.map(el=>el.id===id?{...el,isDone:true}:{...el}))
    setTodo(newTodo.map(el=>el.id===id?{...el,isDone:true}:{...el}))
  }

const onAddNewTask=(label:string)=>{
  const newTask:TasksType={
    label:label,
    important:false,
    id:Date.now(),
    isDone:false
  }
  setTodo([...todo,newTask])
}

  const sortTasks = (filter: string) => {

      const newTodo = [...todo]
    if(filter==='active'){
      console.log('active',newTodo.filter(el => !el.isDone))
      return setTodo( newTodo.filter(el => !el.isDone))
    }
    if(filter==='done'){

      return setTodo( newTodo.filter(el => el.isDone))
    }
    if(filter==='all'){

     return setTodo(newTodo)
    }

  }

  return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter sortTasks={sortTasks}/>
        </div>
        <TodoList todos={todo} deleteTask={deleteTask} onDoneTask={onDoneTask}/>
        <ItemAddForm  onAddNewTask={onAddNewTask}/>
      </div>
  );
}

export default App;
