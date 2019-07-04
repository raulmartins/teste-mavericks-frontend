/* eslint-disable no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Title from '../../components/title'
import Table from '../../components/table'
import BreadCrumb from '../../components/breadCrumb'
import axios from '../../services/api'
import {
  Container, Content, Header, Footer, Button,
} from './styles'

const items = [
  {
    description: 'Início',
  },
  {
    description: 'Pedidos',
  },
]


export default function orderList() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function orderList() {
      const response = await axios.get('/order')
      setOrders(response.data)
    }
    orderList()
  }, [])

  const handleMaxResults = async () => {
    const response = await axios.get('/order')
    setOrders(response.data)
  }

  const handleMinResults = () => {
    const newOrders = orders.slice(0, 4)
    setOrders(newOrders)
  }

  return (
    <Container>
      <BreadCrumb items={items} />
      <Header>
        <Title>Pedidos</Title>
      </Header>
      <Content>
        <Table orders={orders} />
      </Content>
      <Footer>
        <Button onClick={() => { handleMaxResults() }}>MAIS RESULTADOS</Button>
        <Button onClick={() => { handleMinResults() }}><FaArrowUp size={20} color="#002846" /></Button>
      </Footer>
    </Container>
  )
}
