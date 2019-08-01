import React, { useState } from 'react'
import { addTodo, setFilter, clearCompleted, markAll } from '../actions/todo.actions'
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
  const filter = useSelector(appState => appState.filter)
  const count = useSelector(appState => appState.todos.filter(todo => !todo.checked).length)
  const allTodosCount = useSelector(appState => appState.todos.length)
  const todos = useSelector(appState => {
    const filter = appState.filter
    
    switch (filter) {
      case 'active':
        return appState.todos.filter(todo => !todo.checked)
      case 'completed':
        return appState.todos.filter(todo => todo.checked)
      default:
        return appState.todos
    }
  })

  
  
  function handleSubmit(e) {
    e.preventDefault();
    addTodo(todoItem);
    setTodoItem('');
  }



  return (
    <form onSubmit={handleSubmit}>
      <div id='enterTodo'>
        <span id="clearAll"><MaterialIcon onClick={markAll} icon="keyboard_arrow_down" /></span>
          <input type='text' value={todoItem} onChange={e => setTodoItem(e.target.value)} placeholder='Slay the Day! Yassss!' ></input>
          <button id='addTodo' onClick={handleSubmit}><MaterialIcon icon="add_circle_outline" /></button>
      </div>
      <div>
        <ul className="todoListItem">
          {todos.map(todo => (
            <Todo key={'todo' + todo.id} id={todo.id} value={todo.value} checked={todo.checked} />
          ))}
        </ul>
        {allTodosCount > 0 ? (
        <footer>
          <p id='itemCount'>{count} items left</p>
          <div>
            <button className={filter === 'all' ? 'active' : ''} onClick={e => setFilter('all')} type="button">All</button>
            <button className={filter === 'active' ? 'active' : ''} onClick={e => setFilter('active')} type="button">Active</button>
            <button className={filter === 'completed' ? 'active' : ''} onClick={e => setFilter('completed')} type="button">Completed</button>
          </div>
          <button onClick={clearCompleted} type="button" id='clearCompleted'>Clear completed</button>
        </footer>
        ) : ''}
        <button style={{display:'none'}} type="submit">Submit</button>
      </div>
    </form>
  )
}
