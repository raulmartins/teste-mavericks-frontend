import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 633px;
  height: 100vh;
  margin: 0 auto;
  padding: 100px;
  background-image: linear-gradient(to right, #007ac2, #0095d0);
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  width: 300px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 0px 25px;
  margin: 5px 5px 0 0;
  height: 36px;
  border: solid 1px #999;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  color: #999;
  background: #3357ad;
  outline: none;
  font-family: sans-serif;
  border-radius: 3px;
  text-align: center;

  :hover {
    background: #3357cf;
  }
`;
