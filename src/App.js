import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Inventory from "./components/Inventory/Inventory";
import Review from "./components/Review/Review";
import Shop from './components/Shop/Shop';
import NotFound from './components/NotFound/NotFound'
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Login from "./components/Login/Login";
import Shipment from "./components/Shipment/Shipment";
import { useState } from "react/cjs/react.development";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Shop} />
          <Route path='/shop' component={Shop} />
          <Route path='/review' component={Review} />
          <PrivateRoute path='/inventory'>
            <Inventory />
          </PrivateRoute>
          <Route path='/login' component={Login} />
          <PrivateRoute path='/shipment'>
            <Shipment />
          </PrivateRoute>
          <Route path='/product/:productKey' component={ProductDetail} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;