import styled from 'styled-components'

export const Button = styled.button`
  display:flex;
  align-items:center;
  padding:0px 5px;
  width:250px;
  height:40px;
  border:none;
  cursor: pointer;
  color:#fff;
  background:#307FE2;
  outline:none;
  font-family:sans-serif;
  font-size:10px;
  border-radius:3px;
  text-align:start;

  :hover {
    background:#107Fff;
    transition: all 0.5;
  }

  span {
    width:75px;
    padding:5px;
  }
`
