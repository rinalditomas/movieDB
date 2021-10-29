import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Search from "./container/Search";
import Main from "./container/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route
            path="/search/:movie"
            render={({ match }) => <Search match={match.params} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
