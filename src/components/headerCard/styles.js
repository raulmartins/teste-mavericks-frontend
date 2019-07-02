import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  max-width:700px;
  height:50px;
  background:#fff;
  border-radius:3px;
  padding:5px;

  button {
    outline:none;
    border:none;
    cursor: pointer;
    background:#fff;

  }

  span {
    padding:10px;
  }

`
export const Content = styled.div`
  flex:1;
  flex-direction:column;
  padding:5px;

  strong {
    color: rgb(218, 41, 28);
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 13px;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 15px;
    font-weight: normal;
    letter-spacing: 0.25px;
  }
`
export const WrapperIcon = styled.div`
margin:5px;
`
