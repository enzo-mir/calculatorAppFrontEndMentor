import { styled } from "styled-components";

export const ResultContentStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.screenBg};
  border-radius: 15px;
  display: flex;
  padding: 3rem 1.5rem;
  flex-direction: row-reverse;
  align-items: center;
  color: ${(props) => props.theme.textSupp};
  overflow: hidden;
  &::after {
    position: absolute;
    left: 0;
    content: "";
    background: linear-gradient(to left, transparent, ${(props) => props.theme.screenBg});
    width: 50px;
    height: 100%;
  }

  span {
    font-size: 2.5em;
    font-weight: 700;
  }

  @media screen and (max-width: 400px) {
    padding: 2rem 1.5rem;
  }
`;
