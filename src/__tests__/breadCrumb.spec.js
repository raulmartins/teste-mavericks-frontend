import React from 'react'
import {
  render,
  cleanup,
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import { BrowserRouter, Switch } from 'react-router-dom'
import BreadCrumb from '../components/breadCrumb'

const renderComponent = ({ items }) => render(
  <BrowserRouter>
    <Switch>
      <BreadCrumb items={items} />
    </Switch>
  </BrowserRouter>,
)

describe('BreadCrumb', () => {
  afterEach(cleanup)
  const items = [
    {
      description: 'Início',
    },
    {
      description: 'Pedidos',
      path: '/',
    },
    {
      id: Math.random().toString(36).substr(2, 9),
    },
  ]

  it('should render BreadCrumb component', async () => {
    const { getByText } = renderComponent({ items })

    expect(getByText('Pedidos /')).toBeInTheDocument()
  })
})
