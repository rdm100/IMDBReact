import React, { Component } from 'react';
import FilmTable from './containers/FilmTable.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <FilmTable />
      </div>
    );
  }
}

export default App;
