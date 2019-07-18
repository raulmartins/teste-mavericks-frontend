import React from "react";
import Input from "../../components/input";
import { Container, Header, Img, Button, Body } from "./styles";
import logoMoip from "../../assets/image/logoMoip.png";

const login = () => (
  <Container>
    <Header>
      <Img src={logoMoip} alt="logoMoid" />
    </Header>
    <Body>
      <Input placeholder="login ou email" />
      <Input placeholder="senha" />
      <Button onClick={() => {}}>ACESSAR MINHA CONTA</Button>
    </Body>
  </Container>
);

export default login;
