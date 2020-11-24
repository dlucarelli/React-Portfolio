import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Project from "./Components/Project/Project";


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Project} />
        </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
