import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100vw;
  max-width:700px;
  height:50px;
  background:#fff;
  border-radius:3px;

  button {
    outline:none;
    border:none;
    cursor: pointer;
  }

  span {
    padding:10px;
  }

`
export const Content = styled.div`
  flex:1;
  flex-direction:column;
  padding:20px;

  strong {
    color:red;
    font-size: 12px;
  }

  p {
    color:#425F75;
    font-weight:lighter;
  }
`
