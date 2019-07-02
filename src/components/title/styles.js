import styled from 'styled-components'

export const Title = styled.h1`
  font-family:sans-serif;
  color:${({ primary, secondary }) => {
    if (primary) return '#002846'
    if (secondary) return '#5b5d5f'
    return '#2a5cbc'
  }};
  font-weight:bold;
  font-size: ${({ secondary }) => (secondary ? '19px;' : '37px;')};
  font-weight: bold;
  letter-spacing: 0.25px;
`
