import React from "react";
import { Link } from "react-router-dom";

import { HeaderWrapper, LogoContainer, Option, Options } from "./styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <Option onClick={() => auth.signOut()}>Sign out</Option>
        ) : (
          <Option>Sign in</Option>
        )}
      </Options>
    </HeaderWrapper>
  );
};

export default Header;
