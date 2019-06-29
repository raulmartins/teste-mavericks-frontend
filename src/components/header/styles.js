import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin-top: 100px;
`
export const SubContainer = styled.div`
  display:flex;
  margin-top:10px;
  align-content:center;
  align-items:center;
`
export const ContainerValue = styled.div`
  display:flex;
  align-items:flex-start;
  margin-right: 30px;
  small {
    padding:4px;
    margin-top:5px;
    font-size:10px;
    font-weight:bold;
    color:#425563;
  }

  strong {
    font-family:sans-serif;
    font-size:38px;
    color:#425563;
    font-weight:bold;
  }
`
export const ContainerData = styled.div`
  display:flex;
  flex-direction:column;

  small {
    font-size:10px;
    font-weight:bold;
    font-family:sans-serif;
    color:#3162BE
  }

  div {
    display:flex;
    justify-content:center;
    align-items:center;
  }
  span {
    margin:5px;
    height: 3px;
    width: 3px;
    background-color: #000;
    border-radius: 50%;
  }
  p {
    font-size: 18px;
    font-weight:lighter;
    color:#425563;
  }

`
