import styled from "styled-components";

export const CollectiblesContainer = styled.div`
  background-color: #fee94e;
  padding: 7.5rem 1.5rem 1.5rem 1.5rem;
  margin-top: -56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid-gap: 100px;
  align-items: center;

  transition: all 0.85s ease-in-out;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 37%;
  @media screen and (max-width: 992px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
  @media screen and (max-width: 576px) {
    img {
      width: 256px;
      height: auto;
    }
  }
`;
export const LogoTitle = styled.h1`
  font-size: 56px;
  font-weight: 900;
  margin-top: 0px;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  color: rgb(4, 57, 108);
  @media screen and (max-width: 576px) {
    font-size: 30px;
  }
`;
export const GifContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  img {
    position: absolute;
    @media screen and (max-width: 576px) {
      width: 240px;
      height: auto;
    }
  }
  span {
    margin-top: 350px;
  }
`;
