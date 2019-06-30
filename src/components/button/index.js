import React from 'react'

import { Button } from './styles'

export default ({ children, primary }) => (
  <Button primary={primary}>
    { children }
  </Button>
)
