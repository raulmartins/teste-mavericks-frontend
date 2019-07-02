/* eslint-disable no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'

import {
  Container, Body, Footer, WrapperStatus, WrapperOrder,
} from './styles'
import Header from '../../components/header'
import Title from '../../components/title'
import BodyCard from '../../components/bodyCard'
import HeaderCard from '../../components/headerCard'
import CardDetail from '../../components/cardDetail'
import StatusOrder from '../../components/statusOrder'
import axios from '../../services/api'

export default function orderDetail() {
  const [data, setData] = useState({
    id: '',
    customer: {
      addresses: [{}],
    },
    amount: {},
    payments: [{}],
  })

  useEffect(() => {
    async function orderDetail() {
      const response = await axios.get('/order/ORD-2MT2IXTNR5NT')
      setData(response.data)
    }
    orderDetail()
  }, [])

  return (
    <Container>
      <Title primary>Detalhes do pedido</Title>
      <Header value={data.amount.total} payments={data.payments} />
      <Body>
        <WrapperStatus>
          <HeaderCard primary id={data.id}>
            PEDIDO
          </HeaderCard>
          <StatusOrder status="WAITING" />
        </WrapperStatus>
        <WrapperOrder>
          <HeaderCard primary id={data.id}>
            WIRECARD ID
          </HeaderCard>
        </WrapperOrder>
        <HeaderCard>
          DADOS DO COMPRADOR
        </HeaderCard>
        <BodyCard customer={data.customer} />
      </Body>
      <Footer>
        <CardDetail amount={data.amount} />
      </Footer>
    </Container>
  )
}
