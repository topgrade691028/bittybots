import React, { useState } from "react";
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
import Helmet from "./Helmet";
import Face from "./Face";
import Accessory from "./Accessory";
import Engine from "./Engine";
const PlayGround = () => {
  const [gifArm, setArmSrc] = useState("");
  const [gifBody, setBodySrc] = useState("");
  const [gifEngine, setEngineSrc] = useState("");
  const [gifHelmet, setHelmetSrc] = useState("");
  const [gifFace, setFaceSrc] = useState("");
  const [gifAccessory, setAccessorySrc] = useState("");
  const PropsArm = (e: any) => {
    setArmSrc(e);
  };
  const PropsBody = (e: any) => {
    setBodySrc(e);
  };
  const PropsEngine = (e: any) => {
    setEngineSrc(e);
  };
  const PropsHelmet = (e: any) => {
    setHelmetSrc(e);
  };
  const PropsFace = (e: any) => {
    setFaceSrc(e);
  };
  const PropsAccessory = (e: any) => {
    setAccessorySrc(e);
  };
  return (
    <PlayGroundContainer>
      <PlayGroundDisplay>
        {gifArm ? (
          <img src={gifArm} width="400px" height="auto" alt="example" />
        ) : (
          ""
        )}
        {gifBody ? (
          <img src={gifBody} width="400px" height="auto" alt="example" />
        ) : (
          ""
        )}
        {gifEngine ? (
          <img src={gifEngine} width="400px" height="auto" alt="example" />
        ) : (
          ""
        )}
        {gifHelmet ? (
          <img src={gifHelmet} width="400px" height="auto" alt="example" />
        ) : (
          ""
        )}
        {gifFace ? (
          <img src={gifFace} width="400px" height="auto" alt="example" />
        ) : (
          ""
        )}
        {gifAccessory ? (
          <img src={gifAccessory} width="400px" height="auto" alt="example" />
        ) : (
          ""
        )}
      </PlayGroundDisplay>
      <PlayGroundItem>
        <PlayGroundTitle>Select Parts</PlayGroundTitle>
        <Detail>Possible Combinations: 4587520</Detail>
        <CombineContent>
          <span>Press Enter to</span> <button>Randomize</button>
        </CombineContent>
        <Arms SetArm={PropsArm} />
        <Body SetBody={PropsBody} />
        <Engine SetEngine={PropsEngine} />
        <Helmet SetHelmet={PropsHelmet} />
        <Face SetFace={PropsFace} />
        <Accessory SetAccessory={PropsAccessory} />
      </PlayGroundItem>
    </PlayGroundContainer>
  );
};

export default PlayGround;
