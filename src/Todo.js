import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.module.css';

const Todo = ({task, removeTodo, onToggle, completed}) => 
  <li className={styles.task}>
    <span 
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#bdc3c7' : '#34495e'
      }}
      onClick={onToggle}
    >
      {task}
    </span>
    <span 
      className={styles.delete}
      onClick={removeTodo}
    > X </span>
  </li>;

Todo.propTypes = {
  task: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default Todo;