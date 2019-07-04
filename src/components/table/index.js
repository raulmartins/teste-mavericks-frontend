/* eslint-disable react/prop-types */
import React from 'react'
import moment from 'moment'
import { FormattedNumber } from 'react-intl'
import { Link } from 'react-router-dom'
import {
  Table, WrapperId, WrapperTotal, IconBall, WrapperName,
} from './styles'


export default function table({ orders }) {
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
            <td><WrapperId as={Link} to={`/order/${order.id}`}>{order.id}</WrapperId></td>
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
            <td>
              <WrapperName>
                <IconBall>{order.customer.fullname.charAt(0)}</IconBall>
                <WrapperTotal>{order.customer.fullname}</WrapperTotal>
              </WrapperName>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
