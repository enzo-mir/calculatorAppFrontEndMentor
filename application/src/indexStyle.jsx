import { createGlobalStyle } from "styled-components";
export const IndexStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: ${(props) => props.theme.mainBg};
  font-family: 'League Spartan', sans-serif;
  color: white;
}
& *{
  transition: all 0.2s ease-out;
  }
`;
