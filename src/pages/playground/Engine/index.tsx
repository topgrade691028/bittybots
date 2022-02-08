import React from "react";
import {
  EngineContainer,
  EngineTitle,
  EngineDetail,
  EngineContent,
  EngineItem,
} from "./index.styled";
import capitalize1 from "../../../assets/parts/engine/00fdea.gif";
import capitalize2 from "../../../assets/parts/engine/02ce86.gif";
import capitalize3 from "../../../assets/parts/engine/03cf7d.gif";
import capitalize4 from "../../../assets/parts/engine/056fcf.gif";
import capitalize5 from "../../../assets/parts/engine/01458b.gif";
import capitalize6 from "../../../assets/parts/engine/07246d.gif";
import capitalize7 from "../../../assets/parts/engine/09307b.gif";
import capitalize8 from "../../../assets/parts/engine/046480.gif";
import capitalize9 from "../../../assets/parts/engine/063124.gif";
import capitalize10 from "../../../assets/parts/engine/089980.gif";

const Engine = () => {
  return (
    <EngineContainer>
      <EngineTitle>
        Engine <span>Death</span>
      </EngineTitle>
      <EngineDetail>Power: 190</EngineDetail>
      <EngineContent>
        <EngineItem>
          <img src={capitalize1} alt="capitalize" />
        </EngineItem>
        <EngineItem>
          <img src={capitalize2} alt="capitalize" />
        </EngineItem>
        <EngineItem>
          <img src={capitalize3} alt="capitalize" />
        </EngineItem>
        <EngineItem>
          <img src={capitalize4} alt="capitalize" />
        </EngineItem>
        <EngineItem>
          <img src={capitalize5} alt="capitalize" />
        </EngineItem>
        <EngineItem>
          <img src={capitalize6} alt="capitalize" />
        </EngineItem>
        <EngineItem>
          <img src={capitalize7} alt="capitalize" />
        </EngineItem>
        <EngineItem>
          <img src={capitalize8} alt="capitalize" />
        </EngineItem>
        <EngineItem>
          <img src={capitalize9} alt="capitalize" />
        </EngineItem>
        <EngineItem>
          <img src={capitalize10} alt="capitalize" />
        </EngineItem>
      </EngineContent>
    </EngineContainer>
  );
};

export default Engine;
