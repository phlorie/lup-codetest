import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import ListTeams from './components/ListTeams';
import './App.css';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ListTeams />
        </div>
      </Provider>
    );
  }
}

export default App;
