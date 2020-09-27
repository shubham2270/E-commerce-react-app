import React from "react";
import { Link } from "react-router-dom";

import { HeaderWrapper, LogoContainer, Option, Options } from "./styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <Options>
        <Option to="/shop">Shop</Option>
        <Option to="/contact">Contact</Option>
      </Options>
    </HeaderWrapper>
  );
};

export default Header;
