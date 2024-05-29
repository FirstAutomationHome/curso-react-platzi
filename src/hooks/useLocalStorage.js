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
