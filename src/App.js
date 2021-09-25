import React from "react";
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

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Shop} />
        <Route path='/shop' component={Shop} />
        <Route path='/review' component={Review} />
        <Route path='/inventory' component={Inventory} />
        <Route path='/login' component={Login}/>
        <Route path='/shipment' component={Shipment}/>
        <Route path='/product/:productKey' component={ProductDetail} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;