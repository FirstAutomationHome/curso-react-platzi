import React from 'react';
import { AppUI } from './logic/AppUI';
import { TodoProvider } from './context/TodoContext';


function App() {
    
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;