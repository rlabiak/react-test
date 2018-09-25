import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PokemonDetail from './PokemonDetail';
import PokemonList from './PokemonList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route
            path="/"
            component={PokemonList}
            exact
          />
          <Route
            path="/:id"
            component={PokemonDetail}
          />
        </div>
      </Router>
    );
  }
}

export default App;
