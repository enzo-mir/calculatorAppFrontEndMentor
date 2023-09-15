import { HeaderContent } from "./components/headerContent/HeaderContent";
import { ResultContent } from "./components/resultContent/ResultContent";
import { CalculContent } from "./components/calculContent/CalculContent";
import { AppStyle } from "./AppStyle";
import { ThemeProvider } from "styled-components";
import { colorThemeState } from "./data/colorState";
import themeChoice from "./data/colorTheme.json";
import { IndexStyle } from "./indexStyle";

function App() {
  const { theme } = colorThemeState();
  return (
    <ThemeProvider theme={themeChoice[theme]}>
      <IndexStyle />
      <AppStyle>
        <HeaderContent />
        <ResultContent />
        <CalculContent />
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
