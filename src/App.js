import React from 'react'

import GlobalStyle from './styles/global'
import OrderDetail from './pages/orderDetail'
import OrderList from './pages/orderList'


function App() {
  return (
    <>
      <GlobalStyle />
      <OrderDetail />
      <OrderList />
    </>
  )
}

export default App
