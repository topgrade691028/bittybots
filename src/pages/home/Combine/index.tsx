import React from "react";
import {
  CombineContainer,
  CombineContent,
  CombineText,
  CombineImage,
} from "./index.styled";
import capitalize from "../../../assets/nextimg/bittybot-combine.png/1080/75c00d.png";

const Combine = () => {
  return (
    <CombineContainer>
      <CombineContent>
        <CombineText>
          <h1>Combine & Customize!</h1>
          <p>
            Use various parts from the BittyBots you own to combine and
            customize them into an all-new, and more powerful second generation
            BittyBot! Owners of 2 or more bots will have the ability to combine
            them through our simple customization tool. Once combined, you will
            be able to customize an all-new NFT!
          </p>
        </CombineText>
        <CombineImage>
          <img src={capitalize} width="440px" alt="capitalize" />
        </CombineImage>
      </CombineContent>
    </CombineContainer>
  );
};

export default Combine;
