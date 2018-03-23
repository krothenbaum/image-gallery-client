import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from "./gallery/";
import NavBar from "./nav-bar";
import "./App.css";
import UploadForm from "./form";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/upload" component={UploadForm} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
