import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 20px;
  background-color: transparent;
  border-bottom: solid 1px #54addd;
  padding: 7px;
  color: #fff;
  outline: none;
  margin: 20px;
  :focus {
    border-bottom: solid 3px #fff;
  }
  ::placeholder {
    color: #54addd;
    opacity: 0.7;
  }
`;
