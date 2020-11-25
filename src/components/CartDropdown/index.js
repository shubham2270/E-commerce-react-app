import React from "react";

import { CartDropdownWrapper, CartItems, Button } from "./styles";

const CartDropdown = () => {
  return (
    <CartDropdownWrapper>
      <CartItems>Item</CartItems>
      <Button>GO TO CHECKOUT</Button>
    </CartDropdownWrapper>
  );
};

export default CartDropdown;
