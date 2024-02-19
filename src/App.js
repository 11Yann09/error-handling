import React, { Component } from "react";
import Vegeta from "./components/Vegeta";
import Goku from "./components/Goku";
import Freezer from "./components/Freezer";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Cliquez sur les gentils</h1>

        <div className="row">
          <ErrorBoundary>
            <Vegeta />
          </ErrorBoundary>
          <ErrorBoundary>
            <Goku />
          </ErrorBoundary>
          <ErrorBoundary>
            <Freezer />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
