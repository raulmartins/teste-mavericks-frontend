import React from 'react'
import { MdAccessTime } from 'react-icons/md'

import { Button } from './styles'

const button = () => (
  <Button>
    <MdAccessTime size={24} color="#A5cfff" />
    <span>AGUARDE PAGAMENTO</span>
  </Button>
)

export default button
