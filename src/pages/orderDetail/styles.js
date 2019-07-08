import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width: 633px;
  margin: 0 auto;
  padding: 100px 0;

  @media (max-width: 768px) {
    width:100vw;
  }
`

export const Body = styled.div`

`
export const WrapperStatus = styled.div`
  display:flex;

  @media (max-width: 768px) {
    display:flex;
    flex-direction:column-reverse;
    justify-content:center;
    align-items:center;
  }

`
export const WrapperOrder = styled.div`
  margin: 20px 0;

`


export const Footer = styled.div`
  margin: 20px 0;
  width: 700px;

  @media (max-width: 768px) {
    width:100vw;
  }

`
