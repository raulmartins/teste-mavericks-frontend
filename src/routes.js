
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import OrderDetail from './pages/orderDetail'
import OrderList from './pages/orderList'
import PageNotFound from './pages/pageNotFound'

const Routes = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={OrderList} />
      <Route path="/order/:id" component={OrderDetail} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
)

export default Routes
