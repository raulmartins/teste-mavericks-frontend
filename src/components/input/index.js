import React from "react";

import { Input } from "./styles";

const input = ({ active, placeholder, handleChange, type }) => (
  <Input
    active={active}
    placeholder={placeholder}
    onChange={handleChange}
    type={type}
  />
);

export default input;
