import React, { Component } from 'react';
import ListContext from './contexts/ListContext';
import List from './List';
import './App.css';

export default class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			items: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todoItems => { //todoItems[] = {userId, id, title, completed}
        this.setState({
          items: todoItems.slice(0, 10)
        });
      });
  }

  onSetComplete = (id, isNowComplete) => {
    this.setState({
      items: this.state.items.map(item => 
        (id === item.id)
          ? {...item, completed: isNowComplete}
          : item
      )
    });
  };

  onCreate = (newItem) => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(newItem)
    })
      .then(response => response.json())
      .then(({ id }) => {
        //jsonplaceholder doesn't actually save anything so always returns id === 201
        this.nextId = this.nextId || id;
        newItem.id = this.nextId++;

        this.setState({
          items: [...this.state.items, newItem]
        });
      });
  };

  onDelete = (id) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };
  
  render() {
    const         { state, onSetComplete, onDelete, onCreate } = this;
    const value = { state, onSetComplete, onDelete, onCreate };
    return (
      <ListContext.Provider value={value}>
        <div className="App">
          <section>
            <h3>Items</h3>
            <List/>
          </section>
        </div>
      </ListContext.Provider>
    )
  }
}