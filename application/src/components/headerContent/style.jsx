import { styled } from "styled-components";

export const HeaderContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  color: ${(props) => props.theme.textSupp};

  & aside {
    display: flex;
    align-items: flex-end;
    gap: 20px;

    & p {
      font-size: 0.7em;
      font-weight: 700;
      transform: translateY(-25%);
    }

    & .themeChoice {
      display: flex;
      flex-direction: column;
      place-items: center;
      gap: 2px;

      & > span {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 0.3em;
        &.labelChoice{
          font-size: smaller;
        }

        &.inputChoice {
          position: relative;
          background-color: ${(props) => props.theme.keypadBg};
          border-radius: 30px;
          padding-inline: 0.5rem;

          & input {
            opacity: 0;
            &:hover {
              cursor: pointer;
            }
          }

          &.theme1::after {
            left: calc(100% / 3);
            transform: translate(-25%, 50%);
          }
          &.theme2::after {
            left: calc(100% * 2 / 3);
            transform: translate(-25%, 50%);
          }
          &::after {
            transition: all 0.2s ease-out;
            position: absolute;
            content: "";
            border-radius: 50%;
            margin-inline: 0.5rem;
            left: 0%;
            bottom: 50%;
            transform: translate(0%, 50%);
            height: calc(100% - 0.5em);
            aspect-ratio: 1/1;
            background-color: ${(props) => props.theme.toggleBtn};
          }
        }
      }
    }
  }
`;
