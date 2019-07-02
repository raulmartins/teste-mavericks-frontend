import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  flex-direction:column;
  width:100%;
  max-width:700px;
  height:auto;
  border-top:solid 1px #ddd;
  background:#fff;

  div {
    display:flex;
    padding:5px;
  }

  i {
    height: 25px;
    width: 25px;
    background-color: #f7c383;
    border-radius: 50%;
  }
`
export const Content = styled.div`
  display:flex;
  width: auto;
  flex-direction:column;

  strong {
    font-size:10px;
    font-weight:bold;
    color:#425563;
  }

  p {
    color:#425563;
    font-size:12px;
    font-weight:normal;
  }
`
