import React from "react";

import {
  Homepage,
  DirectoryMenu,
  MenuItem,
  Content,
  Title,
  SubTitle,
} from "./styles";

const Home = () => {
  return (
    <Homepage>
      <DirectoryMenu>
        <MenuItem>
          <Content>
            <Title>HATS</Title>
            <SubTitle>Shop Now</SubTitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title>JECKETS</Title>
            <SubTitle>Shop Now</SubTitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title>SNEAKERS</Title>
            <SubTitle>Shop Now</SubTitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title>MEN</Title>
            <SubTitle>Shop Now</SubTitle>
          </Content>
        </MenuItem>
        <MenuItem>
          <Content>
            <Title>WOMEN</Title>
            <SubTitle>Shop Now</SubTitle>
          </Content>
        </MenuItem>
      </DirectoryMenu>
    </Homepage>
  );
};

export default Home;
