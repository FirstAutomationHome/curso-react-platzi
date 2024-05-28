import React from 'react';

function useLocalStorage(itemName,initialValue) {
  
    //Estado para guardar en "todos" la lista de TODOs
    const localStorageItem = localStorage.getItem(itemName)
    let parseItems
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parseItems = initialValue
    } else {
      parseItems = JSON.parse(localStorageItem)
    }
    
    const [item, setItem] = React.useState(parseItems)
  
    //Función que actualice el estado y el local storage al tiempo
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))    
      setItem(newItem)
    }
    return [ item, saveItem]
  }

  export { useLocalStorage }
