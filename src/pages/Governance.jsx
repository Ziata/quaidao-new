import React from "react";
import { GovernanceFooter } from "../components/Governance/GovernanceFooter/GovernanceFooter";
import { GovernanceHeader } from "../components/Governance/GovernanceHeader/GovernanceHeader";
import { GovernanceMain } from "../components/Governance/GovernanceMain/GovernanceMain";

export default function () {
  return (
    <>
      <GovernanceHeader />
      <GovernanceMain />
      <GovernanceFooter />
    </>
  );
}
