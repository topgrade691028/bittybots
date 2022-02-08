import styled from "styled-components";
export const QuestionContainer = styled.div`
  padding: 7.5rem 1.5rem;
  background-color: #e91e63;
  transition: all 0.85s ease-in-out;
  @media screen and (max-width: 991px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;
export const QuestionContent = styled.div`
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
export const QuestionText = styled.div`
box-sizing: border-box;
  font-family: Chivo;
  h1 {
    font-weight: 900;
    font-size: 48px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    color: #FFFF47;
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
export const QuestionImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-sizing: border-box;
  grid-gap: 20px;
  img {
    border-radius: 8px;
    @media screen and (max-width: 1399px) {
      width: 100%;
    }
  }
`;
