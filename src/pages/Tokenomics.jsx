import React from "react";
import { TokenomicsBlock } from "../components/Tokenomics/TokenomicsBlock/TokenomicsBlock";
import { TokenomicsChart } from "../components/Tokenomics/TokenomicsChart/TokenomicsChart";
import { TokenomicsHeader } from "../components/Tokenomics/TokenomicsHeader/TokenomicsHeader";

export default function () {
  return (
    <>
      <TokenomicsHeader />
      <TokenomicsChart />
      <TokenomicsBlock />
    </>
  );
}
