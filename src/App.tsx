import React from 'react';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

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
