import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import createStore, { history } from './createStore';
import ListTeams from './components/ListTeams';
import FormTeam from './components/FormTeam';
import './App.css';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Route path="/" exact component={ListTeams} />
            <Route path="/create" component={FormTeam} />
            <Route path="/edit/:teamId" component={FormTeam} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
