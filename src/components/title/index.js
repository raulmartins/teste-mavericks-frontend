import React from 'react'
import PropTypes from 'prop-types'
import { Title } from './styles'

const title = ({ children, primary, secondary }) => (
  <Title
    primary={primary}
    secondary={secondary}
  >
    {children}
  </Title>
)

Title.propTypes = {
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
}
export default title
