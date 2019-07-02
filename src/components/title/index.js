import React from 'react'

import { Title } from './styles'

const title = ({ children, primary, secondary }) => (
  <Title
    primary={primary}
    secondary={secondary}
  >
    {children}
  </Title>
)
export default title
