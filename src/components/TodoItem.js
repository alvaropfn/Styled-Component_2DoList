import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Wrapper  = styled.section`
  :nth-child(2n){
    background-color: #f4f4f4;
  }
  p{
    
    padding: 10px;
    margin-top: 0;
    margin-bottom: 0;
    
    text-decoration: ${
      props => {
        return props.complete ? "line-through" : ""
      }
    }
  }
  button{
    background-color: #A00;
    color: #fff;
    border: none;
    padding 5px 9px;
    border-radius: 50%;
    float: right;
    margin-right: 0.5em;
  }
`;
export default class TodoItem extends Component {
  
  render() {
    const { id, title} = this.props.todo; // DESTRUCT

    return (
      <Wrapper complete={this.props.todo.complete}>
        <p>
          <input type="checkbox" 
            onChange={this.props.tglComplete.bind(
              this, id
            )} 
          /> {' '}
          {title}
          <button onClick={this.props.delTodo.bind(
              this, id
            )}> x </button>
        </p>
      </Wrapper >
    )
  }
}

// PropType
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}


