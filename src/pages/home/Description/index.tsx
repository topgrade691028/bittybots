import React from "react";
import {
  DescriptionContainer,
  DescriptionContent,
  DescriptionText,
  DescriptionImage,
} from "./index.styled";
import capitalize from "../../../assets/nextimg/bittybot-engines.png/1080/7508ad.png";
const Description = () => {
  return (
    <DescriptionContainer>
      <DescriptionContent>
        <DescriptionText>
          <h1>In the year 2088 A.D.</h1>
          <p>
            ...86% of human life is accompanied by at least one droid companion.
            These bots were built for varying purposes—some to improve the
            efficiency of everyday life, others for self-defense in a world of
            increasing crime. And of course, some have been built for evil.
            Collectively, these droid companions are known as BittyBots.
          </p>
          <p>
            With depleted resources, most BittyBots have been built from the
            scrap parts of expired bots and other available materials. Each bot
            is programmed to run on a naturally harnessed source of
            energy—called an engine—giving them unique powers. The heart-shaped
            engine runs on Love. Which engine will your bot have?
          </p>
        </DescriptionText>
        <DescriptionImage>
          <img src={capitalize} width="440px" alt="capitalize" />
        </DescriptionImage>
      </DescriptionContent>
    </DescriptionContainer>
  );
};

export default Description;
