import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import { updateTodo, deleteTodo, addTodo } from "./actionCreators";
import styles from "./TodoList.module.css";
import { Route } from "react-router-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(val){
    this.props.addTodo(val);
  }

  removeTodo(id) {
    this.props.deleteTodo(id);
  }

  toggleTodo(id) {
    this.props.updateTodo(id);
  }

  render() {
    let todos = this.props.todos.map((val, index) => (
      <Todo
        task={val.task}
        {...val}
        key={index}
        removeTodo={this.removeTodo.bind(this, val.id)}
        onToggle={this.toggleTodo.bind(this, val.id)}
      />
    ));

    return (
      <div>
        <Route
          path="/todos/new"
          component={props => (
            <TodoForm {...props} handleSubmit={this.handleAdd} />
          )}
        />
        {/* <Route exact path="/todos" component={ ()=> <div><ul className={styles.list}>{todos}</ul></div> } /> */}
        <Route exact path="/todos" component={ ()=> <div className={styles.list}>{todos}</div> } />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(mapStateToProps, { updateTodo, deleteTodo, addTodo })(TodoList);
