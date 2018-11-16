import React, { Component } from "react";
import TodoList from "./TodoList";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className={styles.heading}>Todo <span className={styles.headingBold}>List!</span></h1>
        <h2 className={styles.subHeading}>A simple todo list app built with node</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
