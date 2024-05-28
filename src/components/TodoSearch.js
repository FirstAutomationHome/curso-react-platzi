import React from 'react'
import '../styles/TodoSearch.css'

function TodoSearch( {searchValue,setSearchValue }){  
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