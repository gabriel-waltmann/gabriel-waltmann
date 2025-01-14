import { calcAge } from "@/utils/math/calc-age";
import { getTotalWorkTime } from "@/utils/math/get-work-time";
import { CSSProperties } from "react";

export function usePageIndex() {
  const age = calcAge(new Date("2004-10-04"));
  const totalWorkTime = getTotalWorkTime(2022);

  const articleStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1rem",
  };

  return {
    articleStyles,
    age,
    totalWorkTime,
  };
}
