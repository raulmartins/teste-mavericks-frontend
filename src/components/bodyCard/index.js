import React from 'react'
import { FaHome } from 'react-icons/fa'

import { Container, Content } from './styles'

const bodyCard = () => (
  <Container>
    <div>
      <div>
        <i />
      </div>
      <Content>
        <strong>NOME</strong>
        <p>Nome do comprador</p>
      </Content>
    </div>
    <div>
      <div>
        <FaHome size={20} color="#425563" />
      </div>
      <Content>
        <strong>ENDEREÇO</strong>
        <p>Rua Joel Carlos Borges, 60</p>
        <p>Brookly</p>
        <p>São Paulo - SP</p>
        <p>CEP - 04571170</p>
      </Content>
    </div>

  </Container>
)

export default bodyCard
