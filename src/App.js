/*
import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        app here
      </div>
    )
  }
}
/*/
import React, { Component } from 'react';

const MyContext = React.createContext();

class MyComponent extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div>
            <pre>{JSON.stringify(context, null, '\t')}</pre>
          </div>
        )}
      </MyContext.Consumer>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <MyContext.Provider value={{key1: 'value1'}}>
        <MyComponent />
      </MyContext.Provider>
    );
  }
}
//*/