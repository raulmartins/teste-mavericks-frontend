import React from 'react'
import { FormattedNumber } from 'react-intl'
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
export default cardDetail
