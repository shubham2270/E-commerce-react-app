import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { HeaderWrapper, LogoContainer, Option, Options } from "./styles";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/index";
import CartDropdown from "../CartDropdown/index";

const Header = ({ currentUser, hidden }) => {
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
        {console.log("current:", currentUser)}
        {currentUser ? (
          <Option onClick={() => auth.signOut()}>Sign out</Option>
        ) : (
          <Option>Sign in</Option>
        )}
        <CartIcon />
      </Options>
      {hidden && <CartDropdown />}
    </HeaderWrapper>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
