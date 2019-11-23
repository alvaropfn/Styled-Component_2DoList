import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const MyHeader = styled.section`
  background: #333;
  margin 0;
  padding: 0.3em;

  h1{
    text-align: center;
    color: #ddd;
    font-size: 2em;
  }
  ul {
    text-align: center;
    color: #fff;
    padding: 0;
    a{
      padding: 0 0.5em;
      text-decoration: none;
      color: #fff;
    }
  }
`;

function Header() {
  return (
    <MyHeader>
      <h1>My 2Do List</h1>
      <ul>
        <Link to='/'>Home</Link> | 
        <Link to='/about'>About</Link>
      </ul>
    </MyHeader>
  )
}

export default Header