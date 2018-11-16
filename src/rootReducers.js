import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from './actionCreators'

let initialState = {
  todos: [],
  id: 0
}

function rootReducer(state=initialState, action){

  switch (action.type) {
    case ADD_TODO:
      
      let newState = { ...state };
      newState.id++;
      return {
        ...newState,
        todos: [ ...newState.todos, {
          id: newState.id, 
          task: action.task, 
          completed: action.completed
          }
        ]
      };
      
    case REMOVE_TODO:
      let todos = state.todos.filter(val => val.id !== +action.id);
      return {...state, todos };

    case UPDATE_TODO:
      let updateTodos = state.todos.map(val => 
        (val.id === +action.id)
        ? {...val, completed: !val.completed}
        : val
      );
      return {...state, todos: updateTodos };

    default: 
      return state;
  }
}

export default rootReducer;