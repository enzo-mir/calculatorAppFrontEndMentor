import { styled } from "styled-components";

export const CalculContentStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  place-items: center;
  gap: 20px;
  padding: 1rem;
  background-color: ${(props) => props.theme.keypadBg};
  border-radius: 10px;

  & i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    height: fit-content;
    font-size: 32px;
    font-style: initial;
    background-color: ${(props) => props.theme.keyBg};
    color: ${(props) => props.theme.text};
    padding: 0.3rem 0.5rem;
    width: 100%;
    border-radius: 10px;
    height: 100%;
    box-shadow: inset 0px -3px ${(props) => props.theme.keyShadow};

    &:hover {
      filter: brightness(120%);
      cursor: pointer;
    }
    &.darkerKey:hover,
    &.equalKey:hover {
      filter: brightness(150%);
    }

    &.darkerKey {
      color: white;
      box-shadow: inset 0px -3px ${(props) => props.theme.DarkkeyShadow};
      background-color: ${(props) => props.theme.DarkkeyBg};
      font-size: 20px;
    }
    &.equalKey {
      font-size: 20px;
      grid-area: 5 / 3 / 6 / 5;
      color: ${(props) => props.theme.textEqual || "white"};
      background-color: ${(props) => props.theme.toggleBtn};
      box-shadow: inset 0px -3px ${(props) => props.theme.toggleShadow};
    }
    &:nth-last-child(2) {
      grid-area: 5 / 1 / 6 / 3;
    }
  }

  @media screen and (max-width: 400px) {
    gap: 7px;
    & i {
      width: 100%;
      height: auto;
      aspect-ratio: 1/1;
      border-radius: 5px;

      &.equalKey,
      &:nth-last-child(2) {
        aspect-ratio: 2/1;
      }
    }
  }
`;
