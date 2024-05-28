import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import TodoItem from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import './App.css';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Tomar el curso Introducción JS', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAL', completed: false },
//   { text: 'usar estados de React', completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {

  //Estado para guardar en "todos" la lista de TODOs
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }
  const [todos, setTodos] = React.useState(parsedTodos)

  //Estado para la lectura del input o buscador
  const [searchValue, setSearchValue] = React.useState('')
  // console.log('Los usuarios buscan todos de: ' + searchValue)

  //Cantidad de TODOs completados
  const completedTodos = todos.filter(
    todo => !!todo.completed).length
  
  //Total de todos
  const totalTodos = todos.length

  //Buscador de TODOs
  const searchedTodos = todos.filter(
    (todo) => {
      //con el to LowerCase convierte todo a minúscula
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      //
      return todoText.includes(searchText)
    }
  )

  //Función que actualice el estado y el local storage al tiempo
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    
    setTodos(newTodos)
  }

  // Función para marcar los TODOs completados al dar click en el check
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  // Función para eliminar los TODOs al dar click en la X
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }


  return (
    <>
      <TodoCounter 
        completed={completedTodos}
        total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text} 
            completed={todo.completed}
            onComplete={ () => completeTodo(todo.text)}
            onDelete={ () => deleteTodo(todo.text)}/>
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </>
  );
}


export default App;
