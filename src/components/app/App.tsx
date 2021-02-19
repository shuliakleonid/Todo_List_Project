import React from 'react';
import AppHeader from '../app-header/AppHeader';
import SearchPanel from '../search-panel/SearchPanel';
import TodoList, {TasksType} from '../todo-list/TodoList';
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter';
import './App.css'
const App = () => {
  const todoData: Array<TasksType> = [
    {label: 'Drink Coffee', important: false,id:1},
    {label: 'Make Awesome App', important: true,id:2},
    {label: 'Have a lunch', important: false,id:3},
  ]
  return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} />
      </div>
  );
}

export default App;
