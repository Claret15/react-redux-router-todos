import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.module.css';

const Todo = ({task, removeTodo}) => 
// <li>{task}</li>;
  <li className={styles.task}>
    {/* <span 
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#bdc3c7' : '#34495e'
      }}
      // onClick={onToggle}
    >
    </span> */}
      {task}
    <span 
      className={styles.delete}
      onClick={removeTodo}
    > X </span>
  </li>;



Todo.propTypes = {
  task: PropTypes.string.isRequired
}

export default Todo;