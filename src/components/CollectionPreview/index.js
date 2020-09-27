import React from "react";

import { CollectionPreviewWrapper, Title, Preview } from "./styles";
import CollectionItem from "../CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewWrapper>
      <Title>{title}</Title>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...collectionItemProps }) => (
            <CollectionItem key={id} {...collectionItemProps} />
          ))}
      </Preview>
    </CollectionPreviewWrapper>
  );
};

export default CollectionPreview;
