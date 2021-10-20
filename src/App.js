import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Search from './components/search/Search'
import Main from "./container/Main";

function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <div className="App">
         <Route path='/' exact component={Main}/>
         <Route path='/search/:movie' render={({match})=><Search match={match.params}/>}/>
       </div>
     </Switch>
   </Router>
  );
}

export default App;
