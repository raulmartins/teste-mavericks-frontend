import React from 'react'
// import { MdAccessTime } from 'react-icons/md'

import { Button } from './styles'


// const button = ({ text, primary }) => (
//   <Button primary={primary}>
//     {primary && <MdAccessTime size={24} color="#A5cfff" />}
//     <span>{text}</span>
//   </Button>
// )

export default ({ children, primary }) => (
  <Button primary={primary}>
    { children }
  </Button>
)
