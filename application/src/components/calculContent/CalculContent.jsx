import { colorThemeState } from "../../data/colorState";
import { CalculContentStyle } from "./style";
import { resultState } from "../resultContent/resultState";

export const CalculContent = () => {
  const { result, setResult } = resultState();

  function deleteCalc() {
    result.pop();
    setResult(result)

  }
  function resetCalc() {
    setResult([]);
  }
  function equalCalc() {
    setResult([eval(result.join("")).toString()]);
  }
  function addNumber(value) {
    setResult([...result, value]);
  }
  const calcTable = [
    "7",
    "8",
    "9",
    {
      val: "DEL",
      class: "darkerKey",
      fn: deleteCalc,
    },
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    {
      val: "RESET",
      class: "darkerKey",
      fn: resetCalc,
    },
    {
      val: "=",
      class: "equalKey",
      fn: equalCalc,
    },
  ];
  return (
    <CalculContentStyle theme={colorThemeState.theme}>
      {calcTable.map((value, id) => {
        return (
          <i
            key={id}
            className={value.class || null}
            onClick={() => {
              value.length == undefined ? value.fn() : addNumber(value.interpreted || value == "x" ? "*" : value);
            }}
          >
            {value.val || value}
          </i>
        );
      })}
    </CalculContentStyle>
  );
};
