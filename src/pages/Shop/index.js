import React, { useState } from "react";

import SHOP_DATA from "./shopdata";

const Shop = () => {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return <div>Shop</div>;
};

export default Shop;
