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
type EngineProps = {
  SetEngine: Function;
};
const Engine = ({ SetEngine }: EngineProps) => {
  const setItem = (e: any) => {
    SetEngine(e.target.src);
    for (let i = 1; i <= 10; i++) {
      document.getElementById("engine" + i)?.classList.remove("border");
    }
    document.getElementById("engine" + e.target.id)?.classList.add("border");
  };
  return (
    <EngineContainer>
      <EngineTitle>
        Engine <span>Death</span>
      </EngineTitle>
      <EngineDetail>Power: 190</EngineDetail>
      <EngineContent>
        <EngineItem id="engine1">
          <img
            id="1"
            src={capitalize1}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </EngineItem>
        <EngineItem id="engine2">
          <img
            id="2"
            src={capitalize2}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </EngineItem>
        <EngineItem id="engine3">
          <img
            id="3"
            src={capitalize3}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </EngineItem>
        <EngineItem id="engine4">
          <img
            id="4"
            src={capitalize4}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </EngineItem>
        <EngineItem id="engine5">
          <img
            id="5"
            src={capitalize5}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </EngineItem>
        <EngineItem id="engine6">
          <img
            id="6"
            src={capitalize6}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </EngineItem>
        <EngineItem id="engine7">
          <img
            id="7"
            src={capitalize7}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </EngineItem>
        <EngineItem id="engine8">
          <img
            id="8"
            src={capitalize8}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </EngineItem>
        <EngineItem id="engine9">
          <img
            id="9"
            src={capitalize9}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </EngineItem>
        <EngineItem id="engine10">
          <img
            id="10"
            src={capitalize10}
            alt="capitalize"
            onClick={(e: any) => setItem(e)}
          />
        </EngineItem>
      </EngineContent>
    </EngineContainer>
  );
};

export default Engine;
