import React from 'react';

function useLocalStorage(itemName,initialValue) {

  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
    
  React.useEffect(() => {
    setTimeout(() => {
      try {
        //Estado para guardar en "todos" la lista de TODOs
        const localStorageItem = localStorage.getItem(itemName)
        let parseItems
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parseItems = initialValue
        } else {
          parseItems = JSON.parse(localStorageItem)
          setItem(parseItems)
        }
  
        setLoading(false)
        
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 2000)
  },[initialValue, itemName])    
  
    //Función que actualice el estado y el local storage al tiempo
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))    
      setItem(newItem)
    }
    return {item, saveItem, loading, error}
  }

  export { useLocalStorage }


  // const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');