/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { FormattedNumber } from 'react-intl'
import {
  Table, WrapperId, WrapperTotal,
} from './styles'

import axios from '../../services/api'

export default function table() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function orderList() {
      const response = await axios.get('/order?page=1')
      setOrders(response.data)
    }

    orderList()
  }, [])

  return (
    <Table>
      <thead>
        <tr>
          <th>PEDIDOS</th>
          <th>R$</th>
          <th>MEIO</th>
          <th>STATUS</th>
          <th>DATA</th>
          <th>CLIENTE</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td><WrapperId>{order.id}</WrapperId></td>
            <td>
              R$
              <FormattedNumber
                value={order.amount.total}
                format="BRL"
                minimumFractionDigits={2}
              />
            </td>
            <td>{order.payments[0].fundingInstrument.method}</td>
            <td>{order.status}</td>
            <td>
              {/* Não deveria fazer essa conversao aqui... */}
              <WrapperTotal>{moment(order.updatedAt).format('DD/MM/YYYY ')} &#8226; </WrapperTotal>
              <WrapperTotal>{moment(order.updatedAt).format('h:mm')}</WrapperTotal>
            </td>
            <td><WrapperTotal>{order.customer.fullname}</WrapperTotal></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
