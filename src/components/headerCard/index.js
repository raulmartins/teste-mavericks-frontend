import React from 'react'
import { FaWordpressSimple, FaClone } from 'react-icons/fa'
import { Container, Content, WrapperIcon } from './styles'

export default function headerCard({ children, id, primary }) {
  console.log('->>>', !!primary)
  return (
    <Container>
      <WrapperIcon>
        <FaWordpressSimple size={24} color="#495B69" />
      </WrapperIcon>
      <Content primary={primary}>
        <strong>{children}</strong>
        <p>{id}</p>
      </Content>

      <button onClick={() => {}}>
        <span><FaClone size={24} color="#495B69" /></span>
      </button>
    </Container>
  )
}
