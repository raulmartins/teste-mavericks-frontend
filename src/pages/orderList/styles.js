import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width: 946px;
  margin: 0 auto;
  padding: 100px 0;

  @media (max-width: 768px) {
    width:100vw;
  }

`

export const Header = styled.div``

export const Content = styled.div`
  width:946px;
  margin: 30px 0;
`

export const Footer = styled.div`
  display:flex;
  align-items:flex-start;

  @media (max-width: 768px) {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`
export const Button = styled.button`
  display:flex;
  justify-content: center;
  padding:0px 25px;
  margin:5px 5px 0 0;
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

  @media (max-width: 768px) {
    width:200px;
  }

  :hover {
    background:#d1d3d4;
  }

  span {
    width:auto;
    padding:5px;
  }
`
