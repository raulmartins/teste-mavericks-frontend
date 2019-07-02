import React from 'react'
import { FaWordpressSimple, FaClone } from 'react-icons/fa'
import { Container, Content, WrapperIcon } from './styles'

const headerCard = ({ children, id }) => (
  <Container>
    <WrapperIcon>
      <FaWordpressSimple size={24} color="#495B69" />
    </WrapperIcon>
    <Content>
      <strong>{children}</strong>
      <p>{id}</p>
    </Content>

    <button onClick={() => {}}>
      <span><FaClone size={24} color="#495B69" /></span>
    </button>
  </Container>
)

export default headerCard
