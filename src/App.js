import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import About from './components/pages/About';

import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

export default class App extends React.Component {
  state ={
    todos: [
      {
        title: 'one job',
        id: uuid.v4(),
        complete: false
      },{
        title: 'two job',
        id: uuid.v4(),
        complete: false
      },
      {
        title: 'tre job',
        id: uuid.v4(),
        complete: false
      },
    ]
  }

  // 
  tglComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        // return id === todo.id ? todo.complete = !todo.complete : todo
        if(id === todo.id) 
          todo.complete = !todo.complete
        return todo
      })
    });
  }

  delTodo = (id) => {
    console.log(`deleted: ${id}`)
    this.setState({
      todos: [...this.state.todos.filter(
        todo=> todo.id !== id)
      ]
    })
  }

  addTodo = (title) => {
    console.log('todo added')
    const newTodo = {
      id: uuid.v4(),
      title: title,
      complete: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <Router>
        <div >
          <Header />
          <Route exact path ='/' >
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos = {this.state.todos}
              tglComplete={this.tglComplete} 
              delTodo={this.delTodo}
            />
          </Route>
          <Route path ='/about' component={About}></Route>
        </div>
      </Router>
  )};
}