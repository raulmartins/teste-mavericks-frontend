import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OrderDetail from "./pages/orderDetail";
import OrderList from "./pages/orderList";
import Login from "./pages/login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/order" component={OrderList} />
      <Route path="/order/:id" component={OrderDetail} />
      <Route path="*" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
