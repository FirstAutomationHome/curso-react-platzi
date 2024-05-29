import { DeleteIcon } from './DeleteIcon'
import { CompleteIcon } from './CompleteIcon'
import '../styles/TodoItem.css'

export default function TodoItem({ text, completed, onComplete, onDelete }) {
  return(
    <li className='TodoItem'>

      <CompleteIcon 
        completed={completed}  
        onComplete={onComplete}    
      />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}
         onClick={onComplete}>{ text }</p>
      <DeleteIcon         
        onDelete={onDelete} 
      />
      
    </li>
    
  )
}
export {TodoItem}