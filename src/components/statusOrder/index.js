import React from 'react'
import { MdAccessTime } from 'react-icons/md'
import PropTypes from 'prop-types'
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

statusOrder.propTypes = {
  status: PropTypes.string.isRequired,
}

export default statusOrder
