import { styled } from "styled-components";
export const AppStyle = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: 0.1fr 0.3fr 0.6fr;
  width: clamp(300px, 50vw, 500px);
  gap: 25px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
