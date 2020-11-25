import React from "react";
import { connect } from "react-redux";

import { CartIconWrapper, ItemCount } from "./styles";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <CartIconWrapper onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCount>0</ItemCount>
    </CartIconWrapper>
  );
};

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
