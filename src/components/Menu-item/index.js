import React from "react";

import { StyledMenuItem, Content, Title, SubTitle } from "./styles";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <StyledMenuItem imageUrl={imageUrl} size={size}>
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <SubTitle>Shop Now</SubTitle>
      </Content>
    </StyledMenuItem>
  );
};

export default MenuItem;
