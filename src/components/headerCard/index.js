import React from 'react'
import { FaWordpressSimple, FaClone } from 'react-icons/fa'
import { Container, Content } from './styles'

const headerCard = () => (
  <Container>
    <FaWordpressSimple size={20} color="#495B69" />

    <Content>
      <strong>WIREDCARD ID</strong>
      <p>ORD-987697676976</p>
    </Content>

    <button onClick={() => { }}>
      <span><FaClone size={20} color="#495B69" /></span>
    </button>
  </Container>
)

export default headerCard
