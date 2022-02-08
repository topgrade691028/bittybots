import React from "react";
import {
  PresaleContainer,
  PresaleContent,
  PresaleText,
  PresaleImage,
} from "./index.styled";
import Photo from "../../../assets/bb-reveal.gif";

const Presale = () => {
  return (
    <PresaleContainer>
      <PresaleContent>
        <PresaleImage>
          <img src={Photo} width="320px" alt="photo" />
        </PresaleImage>
        <PresaleText>
          <h1>Presale & Reveal</h1>
          <p>
            BittyBots are hidden during pre-sale! This is more fun and makes the
            revealing a community experience.
          </p>
          <p>
            After the reveal, you can click on
            <strong>“Refresh Metadata”</strong>
            on OpenSea to see which BittyBot you got. Which BittyBot are you
            hoping to reveal?
          </p>
        </PresaleText>
      </PresaleContent>
    </PresaleContainer>
  );
};

export default Presale;
