import styled from 'styled-components'

export const Container = styled.div`

`
export const Content = styled.div`
  display:flex;
  width:100%;
  height:137px;
  background:#fff;
  border-radius:4px;
  flex-direction:column;
  margin: 20px 0;

  p {
    color:#3b4e5b;
    font-size:12px;
    text-transform:uppercase;
    font-weight:bold;
    margin: 10px;
  }

`

export const WrapperValue = styled.div`
  display:flex;
  align-items:center;
  padding: 0 10px;
  height:43px;
  background:#e5e9ee;
  margin: 10px 10px;
  border-radius:4px;

  small {
    color:#5b5d5f;
    font-size:12px;
     margin: 0 5px;
  }

  strong {
    color:#3b4e5b;
    font-size:16px;

  }
`

export const WrapperTotal = styled.div`
  display:flex;
  align-items:flex-end;
  small {
    font-size:12px;
    color:#5b5d5f;
    font-weight:bold;
    margin-left:10px;
    margin-right:5px;
    padding: 3px 0;
  }

  strong {
    display:flex;
    align-items:flex-end;
    font-size:26px;
    font-weight:normal;
    color:#3b4e5b;
  }

`
