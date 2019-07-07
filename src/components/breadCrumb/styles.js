import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Content = styled.ul`
  display:flex;

`
export const Item = styled(Link)`
  outline:none;
  text-decoration:none;
  margin: 10px 5px;
  cursor: pointer;
  font-size:18px;
  font-weight:normal;
  letter-spacing:0.5px;
  color: #002846;
`
