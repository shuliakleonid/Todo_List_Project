import React from 'react';
import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import TodoList, {TasksType} from './TodoList';

const App = () => {
  const todoData: Array<TasksType> = [
    {label: 'Drink Coffee', important: false},
    {label: 'Make Awesome App', important: true},
    {label: 'Have a lunch', important: false},
  ]
  return (
      <div>
        <AppHeader title={'My Todo List'}/>
        <SearchPanel/>
        <TodoList data={todoData}/>
      </div>
  );
}

export default App;