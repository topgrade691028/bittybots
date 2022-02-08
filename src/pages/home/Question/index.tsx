import React from "react";
import {
  QuestionContainer,
  QuestionContent,
  QuestionText,
  QuestionImage,
} from "./index.styled";
import Bar1 from "../../../assets/Bar1.gif";
import Bar2 from "../../../assets/Bar2.gif";
import Bar3 from "../../../assets/Bar3.gif";
const Question = () => {
  return (
    <QuestionContainer>
      <QuestionContent>
        <QuestionImage>
          <img src={Bar1} width="132px" alt="bar" />
          <img src={Bar2} width="132px" alt="bar" />
          <img src={Bar3} width="132px" alt="bar" />
        </QuestionImage>
        <QuestionText>
          <h1>What are BittyBots?</h1>
          <p>
            BittyBots is an exciting new NFT collectible on the Ethereum
            blockchain. Each bot is a programatically generated 48x48 (enlarged
            to 480x480) animated pixel artwork.
            <strong>No two BittyBots are alike!</strong>
          </p>
          <p>
            Each BittyBot has unique properties, some rarer than others.
            Properties include a power level determined by a number of factors.
            <strong>How powerful will your BittyBot be?</strong>
          </p>
        </QuestionText>
      </QuestionContent>
    </QuestionContainer>
  );
};

export default Question;
