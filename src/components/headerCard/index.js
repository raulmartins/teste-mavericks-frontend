import React from 'react'
import { FaWordpressSimple, FaClone } from 'react-icons/fa'
import { Container, Content, WrapperIcon } from './styles'

const headerCard = () => (
  <Container>
    <WrapperIcon>
      <FaWordpressSimple size={24} color="#495B69" />
    </WrapperIcon>
    <Content>
      <strong>WIREDCARD ID</strong>
      <p>ORD-987697676976</p>
    </Content>

    <button onClick={() => { }}>
      <span><FaClone size={24} color="#495B69" /></span>
    </button>
  </Container>
)

export default headerCard
