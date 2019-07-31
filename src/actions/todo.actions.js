import store from '../store'

let id = 1

export function create(todoItem) {
  store.dispatch({
    type: 'ADD_TODO',
    payload: {todoItem,
    id: id++}
  })
}



export function removeTodo(id) {
  store.dispatch({
    type: 'REMOVE_TODO',
    payload: id
  })
}