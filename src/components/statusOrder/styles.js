import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  max-width:224px;
  height:48px;
  background:${({ status }) => (status === 'PAID' ? '#2a5cbc' : '#00ffc8')};
  border-radius:3px;
  padding:5px;

`
export const Content = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  p {
    color: rgb(255, 255, 255);
    font-family: sans-serif;
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0.4px;
  }
`
export const WrapperIcon = styled.div`
margin:5px;
`
