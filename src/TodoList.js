import React, { Component } from 'react';
import Todo from './Todo'
import {connect} from 'react-redux';
import TodoForm from './TodoForm';
import styles from './TodoList.module.css';

class TodoList extends Component {
  // eslint-disable-next-line 
  constructor(props){
    super(props);
// Removed so that Redux can control the state    
    //   this.state = {
    //     todos: ['Eat', 'Sleep', 'Drink'],
    //     id: 0
    // };
    // this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(id){
    debugger
    this.props.dispatch({
      type:"REMOVE_TODO",
      id
    });

  }

  render () {

  //original code using this.state
    // let todos = this.state.todos.map( (todo, index) =>
    //   <Todo task={todo} key={index} />)

    let todos = this.props.todos.map((val, index) => (
      <Todo removeTodo={this.removeTodo.bind(this, val.id)} task={val.task} key={index} />
      ));

    return (
      <div>
        <TodoForm />
        <ul className={styles.list}>
          {todos}
        </ul>
      </div>
      
    );
  }
}

// Create a function to be passed to connect() to retrieve state from Redux.
// State will be passed as props. 
// this.props will be used instead of this.state.
function mapStateToProps(reduxState){
  return{
    todos: reduxState.todos
  }
}

export default connect(mapStateToProps)(TodoList);