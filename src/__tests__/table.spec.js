import React from 'react'
import {
  render,
  cleanup,
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import { IntlProvider } from 'react-intl'
import { BrowserRouter, Switch } from 'react-router-dom'
import Table from '../components/table'

const renderComponent = ({ orders }) => render(
  <BrowserRouter>
    <Switch>
      <IntlProvider locale="br">
        <Table orders={orders} />
      </IntlProvider>
    </Switch>
  </BrowserRouter>,
)


describe('Table', () => {
  afterEach(cleanup)

  const orders = [
    {
      id: 'ORD-3FDUG52D54HI',
      status: 'NOT_PAID',
      amount: {
        total: 700,
      },
      customer: {
        fullname: 'Raul Martins',
      },
      payments: [{
        fundingInstrument: {
          method: 'CREDIT_CARD',
        },
      }],
    }]

  it('should render Table component', () => {
    const { getByText } = renderComponent({ orders })
    expect(getByText('ORD-3FDUG52D54HI')).toBeInTheDocument()
  })
})
