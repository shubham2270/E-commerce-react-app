import React from "react";

import {
  CollectionItemWrapper,
  Name,
  Price,
  Image,
  CollectionFooter,
} from "./styles";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <CollectionItemWrapper>
      <Image image={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </CollectionFooter>
    </CollectionItemWrapper>
  );
};

export default CollectionItem;
