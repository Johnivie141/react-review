import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor(){
    super();
    this.state= {
      todo: ['Placeholder', '2']
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(item){
    let newList = this.state.todo.slice(0);
    newList.push(item)
    this.setState({
      todo: newList
    })
  }
  removeItem(i){
    let newList = this.state.todo.slice(0);
    newList.splice(i,1);
    this.setState({
      todo: newList
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo</h2>
        </div>
        <div className="comp-container">
          <Form addItem={this.addItem}  />
          <List list={this.state.todo} removeItem={this.removeItem} />
        </div>
      </div>
    );
  }
}

export default App;
