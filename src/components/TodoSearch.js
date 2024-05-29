import React from 'react'
import { TodoContext } from '../context/TodoContext'
import '../styles/TodoSearch.css'

function TodoSearch(){  

  const {searchValue, setSearchValue} = React.useContext(TodoContext)
    return(
      <input 
        placeholder="Escriba..." 
        className='TodoSearch'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)           
        }} />
    )
}
export { TodoSearch }