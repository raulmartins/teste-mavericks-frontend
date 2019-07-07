import React from 'react'
import {
  render,
  cleanup,
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import Title from '../components/title'

const renderComponent = ({ theme, title }) => render(
  <Title theme={theme}>{title}</Title>,
)

describe('Title', () => {
  afterEach(cleanup)

  it('should Title elements', async () => {
    const { getByText } = renderComponent({ theme: 'primary', title: 'Pedidos' })

    expect(getByText('Pedidos')).toBeInTheDocument()
  })
})
