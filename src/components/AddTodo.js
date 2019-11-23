import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`

  heigth: 1.5em;
  form {
    display: flex;
  }

  input{
    padding: 0.5em;
    &[type=submit]{
      heigth: 100%
      flex: 1;
      color: #fff;
      background-color: #555;
      border-style: none;
    }
    &[type=text] {
      heigth: 100%
      flex: 10;
    }
  }
`;

export class AddTodo extends Component {

  state = {
    title: ''
  }
  onChange = (e) =>{
    this.setState({
      title : e.target.value
    });
  }
  onSubmit = (e) =>{
    e.preventDefault()
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.onSubmit}>
          <input type="submit" value="submit" />
          <input type="text"
            placeholder="Add todo ..." 
            onChange={this.onChange}  
          />
        </form>
      </Wrapper>
    );
  }
}

export default AddTodo;
