import React from 'react'
import moment from 'moment'


import { FormattedNumber } from 'react-intl'
import {
  Container, SubContainer, ContainerValue, ContainerData,
} from './styles'
import Title from '../title'

export default function header({ value, payments }) {
  const { updatedAt } = payments[0]
  return (
    <Container>
      <Title />
      <SubContainer>
        <ContainerValue>
          <small>R$</small>
          <strong>
            <FormattedNumber
              value={value}
              format="BRL"
              minimumFractionDigits={2}
            />
          </strong>
        </ContainerValue>
        <ContainerData>
          <small>DATA</small>
          {/* não deveria fazer a conversão da data nesse local,
            mas em virtude do tempo, implementarei aqui. */}
          <div>
            <p>{moment(updatedAt).format('DD/MM/YYYY ')}</p>
            <span />
            <p>{moment(updatedAt).format('hh:mm')}</p>
          </div>
        </ContainerData>
      </SubContainer>
    </Container>
  )
}
