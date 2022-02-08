import styled from "styled-components";
export const MintContainer = styled.div`
  background-color: #fee94e;
  padding-bottom: 5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  @media screen and (max-width: 576px) {
    padding-bottom: 3rem;
  }
`;
export const MintTitle = styled.div`
  text-align: center;
  color: #212529;
`;
export const MintMark = styled.div`
  color: #04396c;
  text-align: center;
  padding-bottom: 3rem;
`;
export const MintContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
export const MintControl = styled.div`
  display: flex;
  justify-content: center;
  select {
    width: 50px;
    outline: none;
    border: none;
    margin-right: 10px;
  }
  .disableBots {
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
    cursor: default;
    pointer-events: none;
  }
`;
export const BittyBots = styled.div`
  font-size: 24px;
  padding: 0 10px;
  background: #e91e63;
  font-family: Chivo;
  font-weight: 900;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: capitalize;
`;
export const TotalNumber = styled.div`
  font-size: 18px;
  text-transform: capitalize;
  text-align: center;
  color: #04396c;
  font-weight: 700;
`;
export const MintDescription = styled.div`
  background-color: #eaebec;
  border-radius: 8px;
  text-align: left;
  padding: 1.5rem;
  box-sizing: border-box;
  color: #212529;
  width: 50%;
  margin: auto;
  line-height: 30px;
  font-family: Space Mono;
  font-size: 16px;
  font-weight: 400;
  a {
    font-weight: 700;
    color: #e91e63;
    text-decoration: none;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
