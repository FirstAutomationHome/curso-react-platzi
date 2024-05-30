import React from "react"
import '../styles/TodoForm.css'
import { TodoContext } from "../context/TodoContext"

function TodoForm(){
    const {
        addToDo,
        setOpenModal,        

    } = React.useContext(TodoContext)

    const [newTodoValue,setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addToDo(newTodoValue)
        setOpenModal(false)       
    }

    const onCancel = (event) => {          
        setOpenModal(false)       
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContaniner">
                <button 
                    type="button" 
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}>Cancelar</button>
                <button 
                    type="submit" 
                    className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>            
        </form>
    )
}
export { TodoForm }