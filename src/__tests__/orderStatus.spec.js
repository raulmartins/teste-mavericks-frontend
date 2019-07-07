import React from 'react'
import {
  render,
  cleanup,
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import StatusOrder from '../components/statusOrder'

const renderComponent = ({ status }) => render(
  <StatusOrder status={status} />,
)

describe('Status Order', () => {
  afterEach(cleanup)

  it('should statusCard elements', () => {
    const { getByText } = renderComponent({ status: 'PAID' })

    expect(getByText('PEDIDO PAGO')).toBeInTheDocument()
  })
})
