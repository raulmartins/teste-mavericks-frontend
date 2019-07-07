/* eslint-disable react/require-default-props */
import React from 'react'
import moment from 'moment'
import { FormattedNumber, IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'

import {
  Container, SubContainer, ContainerValue, ContainerData,
} from './styles'

export default function header({ value, payments }) {
  const { updatedAt } = payments[0]
  return (
    <Container>
      <SubContainer>
        <ContainerValue>
          <small>R$</small>
          <strong>
            <IntlProvider locale="en">
              <FormattedNumber
                value={value}
                format="BRL"
                FormattedNumber="currency"
                minimumFractionDigits={2}
              />
            </IntlProvider>
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

header.propTypes = {
  value: PropTypes.number,
  payments: PropTypes.arrayOf(PropTypes.shape({
    updatedAt: PropTypes.string,
  })),
}
