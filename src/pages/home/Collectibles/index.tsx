import React, { useEffect, useState } from "react";
import {
  CollectiblesContainer,
  LogoContainer,
  LogoTitle,
  GifContainer,
} from "./index.styled";
import LargeLogo from "../../../assets/large_logo.png";

const Collectibles = () => {
  const [accessory, setAccessory] = useState(0);
  const [arms, setArms] = useState(0);
  const [body, setBody] = useState(0);
  const [engine, setEngine] = useState(0);
  const [face, setFace] = useState(0);
  const [helmet, setHelmet] = useState(0);
  useEffect(() => {
    RandomGif();
  }, []);
  const RandomGif = () => {
    let temp1 = Math.floor(Math.random() * 16) + 1;
    let temp2 = Math.floor(Math.random() * 15) + 1;
    let temp3 = Math.floor(Math.random() * 7) + 1;
    let temp4 = Math.floor(Math.random() * 10) + 1;
    let temp5 = Math.floor(Math.random() * 16) + 1;
    let temp6 = Math.floor(Math.random() * 16) + 1;
    setArms(temp1);
    setHelmet(temp2);
    setAccessory(temp3);
    setEngine(temp4);
    setBody(temp5);
    setFace(temp6);
  };
  return (
    <CollectiblesContainer>
      <LogoContainer>
        <img src={LargeLogo} width="483px" height="auto" alt="large_logo" />
        <LogoTitle>The Cutest Itty Bitty NFT Collectibles</LogoTitle>
      </LogoContainer>
      <GifContainer onClick={() => RandomGif()}>
        <img
          src={`img/body/body (${body}).gif`}
          width="400px"
          height="400px"
          alt="gif"
        />
        <img
          src={`img/arms/arms${arms}.gif`}
          width="400px"
          height="400px"
          alt="gif"
        />

        <img
          src={`img/helmet/helmet (${helmet}).gif`}
          width="400px"
          height="400px"
          alt="gif"
        />
        <img
          src={`img/engine/engine (${engine}).gif`}
          width="400px"
          height="400px"
          alt="gif"
        />

        <img
          src={`img/face/face (${face}).gif`}
          width="400px"
          height="400px"
          alt="gif"
        />
        <img
          src={`img/accessory/accessory${accessory}.gif`}
          width="400px"
          height="400px"
          alt="gif"
        />
        <span>Click me!</span>
      </GifContainer>
    </CollectiblesContainer>
  );
};

export default Collectibles;
