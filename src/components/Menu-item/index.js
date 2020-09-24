import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { StyledMenuItem, Content, Title, SubTitle } from "./styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let history = useHistory();
  let match = useRouteMatch();
  return (
    <StyledMenuItem
      imageUrl={imageUrl}
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <SubTitle>Shop Now</SubTitle>
      </Content>
    </StyledMenuItem>
  );
};

export default MenuItem;
