import React, { Component } from "react";
import TodoList from "./TodoList";
import styles from "./App.module.css";
import { Link, Route, Redirect } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className={styles.heading}>Todo <span className={styles.headingBold}>List!</span></h1>
        <h2 className={styles.subHeading}>A simple todo list app built with node</h2>
        <p>  
          <Link to="/todos"><button className={styles.button}>View Tasks!</button></Link>
          <Link to="/todos/new"><button className={styles.button}>Add Task!</button></Link>
        </p>
        <Route path="/todos" component = { TodoList } />
        <Route exact path="/" render={ () => <Redirect to="/todos"/> } />
      </div>
    );
  }
}

export default App;
