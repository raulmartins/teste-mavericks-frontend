/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Input from "../../components/input";
import { Container, Header, Img, Button, Body } from "./styles";
import logoMoip from "../../assets/image/logoMoip.png";
import axios from "../../services/api";

export default function login({ history }) {
  const [auth, setAuth] = useState({
    username: "",
    password: ""
  });

  const handleAuth = async () => {
    const response = await axios.post("/session", auth);
    const { accessToken } = response.data;
    if (response.status === 200) {
      localStorage.setItem("accessToken", accessToken);
      history.push("/order");
    }
  };

  const handleChangeUsername = async e => {
    const username = e.target.value;
    setAuth({ ...auth, username });
  };

  const handleChangePassword = async e => {
    const password = e.target.value;
    setAuth({ ...auth, password });
  };

  return (
    <Container>
      <Header>
        <Img src={logoMoip} alt="logoMoid" />
      </Header>
      <Body>
        <Input
          handleChange={e => {
            handleChangeUsername(e);
          }}
          placeholder="login ou email"
        />
        <Input
          handleChange={e => {
            handleChangePassword(e);
          }}
          type="password"
          placeholder="senha"
        />
        <Button
          onClick={() => {
            handleAuth();
          }}
        >
          ACESSAR MINHA CONTA
        </Button>
      </Body>
    </Container>
  );
}
