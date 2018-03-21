import React, { Component } from 'react';
import Gallery from './gallery/';
import UploadForm from './form';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UploadForm />
        <Gallery />
      </div>
    );
  }
}

export default App;
