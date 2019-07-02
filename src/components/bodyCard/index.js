/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Container, Content } from './styles'

export default function bodyCard({ customer }) {
  const address = customer.addresses[0]
  return (
    <Container>
      <div>
        <div>
          <i />
        </div>
        <Content>
          <strong>NOME</strong>
          <p>{customer.fullname}</p>
        </Content>
      </div>
      <div>
        <div>
          <FaHome size={20} color="#425563" />
        </div>
        <Content>
          <strong>ENDEREÇO</strong>
          <p>{address.street}, {address.streetNumber}</p>
          <p>{address.district}</p>
          <p>{address.state}</p>
          <p>CEP - {address.zipCode}</p>
        </Content>
      </div>

    </Container>
  )
}
