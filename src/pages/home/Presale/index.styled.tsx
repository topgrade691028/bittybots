import styled from "styled-components";
export const PresaleContainer = styled.div`
  padding: 7.5rem 1.5rem;
  background-color: #253a5e;
  @media screen and (max-width: 991px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;
export const PresaleContent = styled.div`
  margin-left: 16.6666666667%;
  margin-right: 16.6666666667%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1399px) {
    margin-left: 5%;
    margin-right: 5%;
  }
  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    margin: auto 20px;
  }
`;
export const PresaleText = styled.div`
  h1 {
    font-family: Chivo;
    font-weight: 900;
    font-size: 48px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    color: #ffffff;
    max-width:440px;
    @media screen and (max-width: 991px) {
      margin-block-start: 0em;
    margin-block-end: 0em;
    }
  }
  p {
    font-family: Space Mono;
    font-size: 18px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 1rem;
    color: #ffffff;
    line-height:30px;
}
  }
`;
export const PresaleImage = styled.div`
  img {
    @media screen and (max-width: 991px) {
      max-width: 320px;
      width: 100%;
    }
  }
`;
