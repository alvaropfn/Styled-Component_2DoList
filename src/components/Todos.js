import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

export default class Todos extends React.Component {
  
  render() {
    console.log(this.props.todos)
    return this.props.todos.map((todo) => (
      <TodoItem todo={todo} 
        key={todo.id}
        delTodo={this.props.delTodo}
        tglComplete={this.props.tglComplete}
      /> 
    ));
  }
}

// PropType
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}