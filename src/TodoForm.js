import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actionCreators";
import styles from "./TodoForm.module.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Manages the state of the input text
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let task = this.state.task;
    this.props.dispatch(addTodo(task));
    e.target.reset();
    this.setState({
      task: ""
    });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          className={styles.todoInput}
          onChange={this.handleChange}
          id="task"
          name="task"
          placeholder="Add a new task"
        />
        <button className={styles.button}>Add Task</button>
      </form>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(mapStateToProps)(TodoForm);
