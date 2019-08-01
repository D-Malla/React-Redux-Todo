import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import TodoForm from './TodoForm'

export default props => {
  return (
    <Provider store={store}>
      <div id='container'>
        <header id='mainHeader'>
          <h1>Goal Digger</h1>
        </header>
        <TodoForm />
      </div>
    </Provider>
  )
}