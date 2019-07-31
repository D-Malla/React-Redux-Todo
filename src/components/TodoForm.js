import React, { useState } from 'react'
import { create } from '../actions/todo.actions'
import { useSelector } from 'react-redux'
import Todo from './Todo'
import '../styles/App.css'
import MaterialIcon from 'material-icons-react'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Dancing Script', 'cursive']
  }
});

export default props => {
  const [todoItem, setTodoItem] = useState('')
  const todos = useSelector(appState => appState.todos)


  function createTodo(e) {
    create(todoItem)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // call function to add a todo
    setTodoItem('');
    }



  return (
    <div id='container'>
      <form onSubmit={handleSubmit} name='myForm'>
        <header id='mainHeader'>
          <h1>Goal Digger</h1>
        </header>
        <div id='enterTodo'>
          <div id='inputDiv'>
            <input type='text' value={todoItem} minLength={4} onChange={e => setTodoItem(e.target.value)} placeholder='Slay the Day! Yassss!' ></input>
          </div>
          <div id='addDiv'>
            <button id='addTodo' onClick={createTodo}><MaterialIcon icon="add_circle_outline" /></button>
          </div>
        </div>
        <div>
          <ul>
            {todos.map((todo, id) => (
              <div>
                <li className='todoListItem'><Todo key={'todo' + id} {...todo}/></li>
              </div>
            ))}
          </ul>
        </div>
      </form>
    </div>
  )
}