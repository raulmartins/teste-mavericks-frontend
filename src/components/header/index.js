import React from 'react'

import {
  Container, SubContainer, ContainerValue, ContainerData,
} from './styles'
import Title from '../title'

const header = () => (
  <Container>
    <Title />
    <SubContainer>
      <ContainerValue>
        <small>R$</small>
        <strong>380,00</strong>
      </ContainerValue>
      <ContainerData>
        <small>DATA</small>
        <div>
          <p>13/07/1990</p><span /><p>13:11</p>
        </div>
      </ContainerData>
    </SubContainer>
  </Container>
)

export default header
