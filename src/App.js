import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppPage from "./pages/app";
import Form from "./pages/form";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/app"><AppPage /></Route>
          <Route path="/"><Form /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
