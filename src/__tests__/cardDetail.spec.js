import React from 'react'
import {
  render,
  cleanup,
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import { IntlProvider } from 'react-intl'
import CardDetail from '../components/cardDetail'

const renderComponent = ({ amount }) => render(
  <IntlProvider locale="br">
    <CardDetail amount={amount} />
  </IntlProvider>,
)

describe('CardDetail', () => {
  afterEach(cleanup)
  const amount = {
    total: '12333',
  }

  it('should render CardDetail Component', async () => {
    const { getByText, debug } = renderComponent({ amount })

    debug()
    expect(getByText('VALOR TOTAL DOS ITENS')).toBeInTheDocument()
    expect(getByText('12,333.00')).toBeInTheDocument()
    expect(getByText('DETALHES DO PEDIDO')).toBeInTheDocument()
  })
})
