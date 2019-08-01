import store from '../store'

let id = 1

export function addTodo(todoItem) {  
  store.dispatch({
    type: 'ADD_TODO',
    payload: {
      value: todoItem,
      id: id,
      checked: false
    }
  })

  id++
}

export function removeTodo(todoid) {
  store.dispatch({
    type: 'REMOVE_TODO',
    payload: todoid
  })
}

export function modifyTodo(todo) {
  store.dispatch({
    type: 'MODIFY_TODO',
    payload: {
      id: todo.id,
      value: todo.value,
      checked: todo.checked
    }
  })
}

export function setFilter(filter) {
  store.dispatch({
    type: 'CHANGE_FILTER',
    payload: filter
  })
}

export function clearCompleted() {
  store.dispatch({
    type: 'CLEAR'
  })
}

export function markAll() {
  store.dispatch({
    type: 'MARK_ALL'
  })
}