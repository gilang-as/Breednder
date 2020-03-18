import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//Page
import Homepage from './page/Homepage';
import Dashpage from './page/Dashpage';
import Profilepage from './page/Profilepage';
import AddPetpage from './page/AddPetpage';
import UpdatePetpage from './page/UpdatePetpage';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/add-pet">
            <AddPetpage />
          </Route>
          <Route path="/update-pet">
            <UpdatePetpage />
          </Route>
          <Route path="/profile">
            <Profilepage />
          </Route>
          <Route path="/dashboard">
            <Dashpage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
    </Router>
  );
}