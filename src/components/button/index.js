
import React from 'react'
import PropTypes from 'prop-types'
import { ButtonMav } from './styles'

export default function Button({ children, primary }) {
  return (
    <ButtonMav primary={primary}>
      { children }
    </ButtonMav>
  )
}
Button.defaultProps = {
  children: '',
}
Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.string,
}
