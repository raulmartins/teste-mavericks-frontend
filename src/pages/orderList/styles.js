import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width: 946px;
  margin: 0 auto;
  padding: 100px 0;
`

export const Header = styled.div``

export const Content = styled.div`
  width:946px;
  margin: 30px 0;
`

export const Footer = styled.div`
  display:flex;
  align-items:flex-start;
`
export const Button = styled.button`
  display:flex;
  justify-content: center;
  padding:0px 25px;
  margin:0px 5px 0 0;
  width:auto;
  height:36px;
  border:solid 1px #999;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  color: rgb(0, 40, 70);
  background:transparent;
  outline:none;
  font-family:sans-serif;
  border-radius:3px;
  text-align:center;

  :hover {
    background:#d1d3d4;
  }

  span {
    width:auto;
    padding:5px;
  }
`
