import React from "react";
import {
  PlayGroundContainer,
  PlayGroundDisplay,
  PlayGroundItem,
  PlayGroundTitle,
  Detail,
  CombineContent,
} from "./index.styled";
import Arms from "./Arms";
import Body from "./Body";
import example from "../../assets/bb1_205c5.gif";
import Helmet from "./Helmet";
import Face from "./Face";
import Accessory from "./Accessory";
import Engine from "./Engine";
const PlayGround = () => {
  return (
    <PlayGroundContainer>
      <PlayGroundDisplay>
        <img src={example} width="200px" height="auto" alt="example" />
      </PlayGroundDisplay>
      <PlayGroundItem>
        <PlayGroundTitle>Select Parts</PlayGroundTitle>
        <Detail>Possible Combinations: 4587520</Detail>
        <CombineContent>
          <span>Press Enter to</span> <button>Randomize</button>
        </CombineContent>
        <Arms />
        <Body />
        <Engine />
        <Helmet />
        <Face />
        <Accessory />
      </PlayGroundItem>
    </PlayGroundContainer>
  );
};

export default PlayGround;
