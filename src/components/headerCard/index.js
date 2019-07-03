/* eslint-disable react/require-default-props */
import React from 'react'
import { FaWordpressSimple, FaClone } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Container, Content, WrapperIcon } from './styles'

export default function headerCard({ children, id, primary }) {
  return (
    <Container>
      <WrapperIcon>
        <FaWordpressSimple size={24} color="#495B69" />
      </WrapperIcon>
      <Content primary={primary}>
        <strong>{children}</strong>
        <p>{id}</p>
      </Content>
      <button type="submit" onClick={() => {}}>
        <span><FaClone size={24} color="#495B69" /></span>
      </button>
    </Container>
  )
}

headerCard.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  primary: PropTypes.bool,
}
