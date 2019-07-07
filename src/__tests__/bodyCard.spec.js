/* eslint-disable comma-dangle */
import React from 'react'
import {
  render,
  cleanup,
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import BodyCard from '../components/bodyCard'

const renderComponent = ({ customer }) => render(
  <BodyCard customer={customer} />
)

describe('bodyCard', () => {
  afterEach(cleanup)

  const customer = {
    fullname: 'Raul Martins',
    addresses: [{
      city: 'São Paulo',
      complement: 'apt 206',
      country: 'BRA',
      district: 'Cidade Monções',
      state: 'SP',
      street: 'Joel Carlos Borges',
      streetNumber: '60',
      zipCode: '04571170',
    }]
  }

  it('should render BodyCard component', () => {
    const { getByText } = renderComponent({ customer })

    expect(getByText('NOME')).toBeInTheDocument()
    expect(getByText('ENDEREÇO')).toBeInTheDocument()
    expect(getByText('Raul Martins')).toBeInTheDocument()
    expect(getByText('Cidade Monções')).toBeInTheDocument()
  })
})
