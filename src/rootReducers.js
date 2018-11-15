import {ADD_TODO, REMOVE_TODO} from './actionCreators'

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
        todos: [ ...newState.todos, {id: newState.id, task: action.task} ]
        
      };
      
    case REMOVE_TODO:
      let todos = state.todos.filter(val => val.id !== +action.id);
      return {...state, todos };

    default: 
      return state;
  }
}

export default rootReducer;