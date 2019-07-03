import React from 'react'
import { FormattedNumber } from 'react-intl'
import PropTypes from 'prop-types'
import Title from '../title'
import {
  Container, Content, WrapperTotal, WrapperValue,
} from './styles'

const cardDetail = ({ amount }) => (
  <Container>
    <Title secondary>DETALHES DO PEDIDO</Title>
    <Content>
      <WrapperValue>
        <small>R$</small>
        <strong>
          <FormattedNumber
            value={amount.total}
            format="BRL"
            minimumFractionDigits={2}
          />
        </strong>
      </WrapperValue>
      <p>VALOR TOTAL DOS ITENS</p>
      <WrapperTotal>
        <small>R$</small>
        <strong>
          <FormattedNumber
            value={amount.total}
            format="BRL"
            minimumFractionDigits={2}
          />
        </strong>
      </WrapperTotal>
    </Content>
  </Container>
)

cardDetail.propType = {
  amount: PropTypes.shape({
    total: PropTypes.string.isRequired,
  }),
}
export default cardDetail
