import { Fragment } from "react";
import { resultState } from "./resultState";
import { ResultContentStyle } from "./style";

export const ResultContent = () => {
  const { result } = resultState();

  return (
    <ResultContentStyle>
      <span>
        {result.length ? (
          result.map((el, id) => {
            return <Fragment key={id}>{el}</Fragment>;
          })
        ) : (
          <Fragment>0</Fragment>
        )}
      </span>
    </ResultContentStyle>
  );
};
