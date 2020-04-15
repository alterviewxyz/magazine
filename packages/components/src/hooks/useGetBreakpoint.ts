import * as React from "react";
import { useEffect } from "react";

interface IUseGetBreakpointReturn {
  isBelowSM: boolean;
  isBelowMD: boolean;
  isBelowLG: boolean;
  isBelowXL: boolean;
}

const useGetBreakpoint = (): IUseGetBreakpointReturn => {
  // tailwind breakpoints
  const sm = 640;
  const md = 768;
  const lg = 1024;
  const xl = 1280;

  const [isBelowSM, setIsBelowSM] = React.useState(window.innerWidth < sm);
  const [isBelowMD, setIsBelowMD] = React.useState(window.innerWidth < md);
  const [isBelowLG, setIsBelowLG] = React.useState(window.innerWidth < lg);
  const [isBelowXL, setIsBelowXL] = React.useState(window.innerWidth < xl);

  function handleSizeChange(): void {
    setIsBelowSM(window.innerWidth < sm);
    setIsBelowMD(window.innerWidth < md);
    setIsBelowLG(window.innerWidth < lg);
    setIsBelowXL(window.innerWidth < xl);
  }

  useEffect(() => {
    window.addEventListener("resize", handleSizeChange);

    return (): void => {
      window.removeEventListener("resize", handleSizeChange);
    };
  });

  return {
    isBelowSM,
    isBelowMD,
    isBelowLG,
    isBelowXL,
  };
};

export default useGetBreakpoint;
