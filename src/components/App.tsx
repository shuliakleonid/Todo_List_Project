import React from 'react';
import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';

const App = () => {
  return (
      <div>
        <AppHeader title={'My Todo List'}/>
        <SearchPanel/>
        <TodoList/>
      </div>
  );
}

export default App;
