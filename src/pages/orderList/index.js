import React from 'react'
import Title from '../../components/title'
import Table from '../../components/table'
import Button from '../../components/button'
import {
  Container, Content, Header, Footer,
} from './styles'

const orderList = () => (
  <Container>
    <Header>
      <Title>Pedidos Noroes</Title>
    </Header>
    <Content>
      <Table />
    </Content>
    <Footer>
      <Button>MAIS RESULTADOS</Button>
    </Footer>
  </Container>
)

export default orderList
