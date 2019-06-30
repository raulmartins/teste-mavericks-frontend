import React from 'react'
import { MdAccessTime } from 'react-icons/md'
import { Container, Content, WrapperIcon } from './styles'

const STATUS_ORDER = {
  PAID: 'PEDIDO PAGO',
  NOT_PAID: 'PEDIDO NÃO PAGO',
  WAITING: 'AGUARDANDO PAGAMENTO',
  REVERTED: 'PEDIDO REVERTIDO',
}

const statusOrder = ({ status }) => (
  <Container status={status}>
    <WrapperIcon>
      <MdAccessTime size={21} color="#FFF" />
    </WrapperIcon>
    <Content>
      <p>{STATUS_ORDER[status]}</p>
    </Content>
  </Container>
)

export default statusOrder
