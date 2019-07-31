import React from 'react'
import { removeTodo } from '../actions/todo.actions'
import MaterialIcon from 'material-icons-react'

export default props => {
  function deleteTodo() {
    removeTodo(props.id)
  }

  return (
    <li>
      <p>{props.todoItem}</p>
      <button className='delButton' onClick={deleteTodo}><MaterialIcon icon="clear" /></button>
    </li>
  )
}