import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import { updateTodo, deleteTodo } from "./actionCreators";
import styles from "./TodoList.module.css";

class TodoList extends Component {
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
        <TodoForm />
        <ul className={styles.list}>{todos}</ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(mapStateToProps, { updateTodo, deleteTodo })(TodoList);
