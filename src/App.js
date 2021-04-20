import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import ServiceDetails from "./components/Services/ServiceDetails/ServiceDetails";
import NoMatch from "./components/NoMatch/NoMatch";
import DashBoard from "./components/DashBoard/Dashboard/DashBoard";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";


import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./components/Login/PrivateRoute";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser.email)

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute exact path="/services/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>

          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
