import React from "react";
import {
  CollectiblesContainer,
  LogoContainer,
  LogoTitle,
  GifContainer,
} from "./index.styled";
import LargeLogo from "../../../assets/large_logo.png";
import bb1 from "../../../assets/bb1_3a76b.gif";
const Collectibles = () => {
  return (
    <CollectiblesContainer>
      <LogoContainer>
        <img src={LargeLogo} width="483px" height="auto" alt="large_logo" />
        <LogoTitle>The Cutest Itty Bitty NFT Collectibles</LogoTitle>
      </LogoContainer>
      <GifContainer>
        <img src={bb1} width="400px" height="400px" alt="gif" />
        <span>Click me!</span>
      </GifContainer>
    </CollectiblesContainer>
  );
};

export default Collectibles;
