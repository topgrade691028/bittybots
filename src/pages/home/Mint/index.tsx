import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MintContainer,
  MintTitle,
  MintMark,
  MintContent,
  MintControl,
  BittyBots,
  TotalNumber,
  MintDescription,
} from "./index.styled";
const Mint = () => {
  const [mintNumber, setMintNumber] = useState(1);
  const [TotalValue, setTotalValue] = useState(0);
  const [displayFlag, setDisplayFlag] = useState(false);
  const setValue = (e: any) => {
    let val = e.target.value;
    setMintNumber(Number(val));
    setTotalValue(Number(val) * 100);
  };
  return (
    <MintContainer>
      <MintTitle>Public minting will close forever in...</MintTitle>
      <MintMark>Time's Up!</MintMark>
      <MintContent>
        <MintControl>
          <select id="select" onChange={(e: any) => setValue(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          {displayFlag && <BittyBots>Mint{mintNumber}BittyBots</BittyBots>}
          {!displayFlag && (
            <BittyBots className="disableBots">
              Mint{mintNumber}BittyBots
            </BittyBots>
          )}
        </MintControl>
        <TotalNumber>Total:{TotalValue}MATIC</TotalNumber>
      </MintContent>
      <MintDescription>
        BittyBots is on the <Link to="/">Polygon Blockchain</Link> and requires
        MATIC to min! Don't know how to start? Check out our{" "}
        <Link to="/">FAQ</Link>. you can also look at the
        <Link to="/">Playground</Link> to learn what parts are remaining.
      </MintDescription>
    </MintContainer>
  );
};

export default Mint;
