import { HeaderContentStyle } from "./style";
import { colorThemeState } from "../../data/colorState";

export const HeaderContent = () => {
  const { theme, setTheme } = colorThemeState();

  return (
    <HeaderContentStyle>
      <h1>calc</h1>
      <aside>
        <p>THEME</p>
        <div className="themeChoice">
          <span className="labelChoice">
            <label htmlFor="theme1">1</label>
            <label htmlFor="theme2">2</label>
            <label htmlFor="theme3">3</label>
          </span>
          <span className={`inputChoice theme${theme}`}>
            <input
              defaultChecked={theme == 0 ? true : false}
              onChange={(e) => {
                e.target.checked ? setTheme(0) : null;
              }}
              type="radio"
              name="theme"
              id=""
            />
            <input
              defaultChecked={theme == 1 ? true : false}
              onChange={(e) => {
                e.target.checked ? setTheme(1) : null;
              }}
              type="radio"
              name="theme"
              id=""
            />
            <input
              defaultChecked={theme == 2 ? true : false}
              onChange={(e) => {
                e.target.checked ? setTheme(2) : null;
              }}
              type="radio"
              name="theme"
              id=""
            />
          </span>
        </div>
      </aside>
    </HeaderContentStyle>
  );
};
