const initialState = {
  todos: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todos:[...state.todos, action.payload]}
    case 'REMOVE_TODO':
      return {...state, todos: state.todos.filter(t => action.payload !==t.id)}
    default:
      return state
  }
}

