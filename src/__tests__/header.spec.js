import React from 'react'
import {
  render,
  cleanup,
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import { IntlProvider } from 'react-intl'
import Header from '../components/header'

const renderComponent = ({ value, payments }) => render(
  <IntlProvider locale="en">
    <Header value={value} payments={payments} />
  </IntlProvider>,
)

describe('Header', () => {
  afterEach(cleanup)
  const value = Number('2100')
  const payments = [{
    updatedAt: '2019-07-06T15:24:30-0300',
  }]

  it('should Title elements', async () => {
    const { getByText } = renderComponent({ value, payments })

    expect(getByText('2,100.00')).toBeInTheDocument()
  })
})
