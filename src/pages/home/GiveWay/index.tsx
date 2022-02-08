import React from "react";
import {
  GiveWayContainer,
  GiveWayContent,
  GiveWayTitle,
  GiveWayDescription,
  GiveWayImageGroup,
  CollectionContainer,
} from "./index.styled";
import one from "../../../assets/bb1_19614.gif";
import two from "../../../assets/bb1_205c5.gif";
import three from "../../../assets/bb1_3a76b.gif";
import godbots from "../../../assets/godbots.png";
const GiveWay = () => {
  return (
    <>
      <GiveWayContainer>
        <GiveWayContent>
          <GiveWayTitle>
            <span>10 ETH</span>
            <br />
            Give-
            <br />
            AWAY
          </GiveWayTitle>
          <GiveWayDescription>
            <GiveWayImageGroup>
              <img src={one} width="100%" alt="capitalize" />
              <img src={two} width="100%" alt="capitalize" />
              <img src={three} width="100%" alt="capitalize" />
            </GiveWayImageGroup>
            <p>
              Reveal a BittyBot with one of these BB1 (BittyBots 1ETH)
              companions and we will Airdrop you 1 ETH when BittyBot #19999 is
              minted.
              <strong>NO JOKE!</strong> There are 10 of these NFTs in total.
            </p>
          </GiveWayDescription>
        </GiveWayContent>
      </GiveWayContainer>
      <CollectionContainer>
        <h2>Plus, Rare 1-of-1 Sub-Collections</h2>
        <p>
          There are only <span className="bold">16 Glitchbots</span>,{" "}
          <span className="bold">16 Goldbots</span> and{" "}
          <span className="bold">16 Godbots</span> spread throughout the
          collection.
          <br /> Will you reveal one of these mega rare BittyBot NFTs?
        </p>
        <img src={godbots} width="100%" height="auto" alt="godbots" />
      </CollectionContainer>
    </>
  );
};

export default GiveWay;
