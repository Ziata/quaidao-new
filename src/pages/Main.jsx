import React, { useState } from "react";
import { Coins } from "../components/Coins/Coins";
import { CoomingSoon } from "../components/CoomingSoon/CoomingSoon";
import { DefiBlock } from "../components/DefiBlock/DefiBlock";
import { ExploreBlock } from "../components/ExploreBlock/ExploreBlock";
import { FirstScreen } from "../components/FirstScreen/FirstScreen";
import { MainScreenInfo } from "../components/MainScreenInfo/MainScreenInfo";
import { Roadmap } from "../components/Roadmap/Roadmap";
import { Partners } from "../components/Partners/Partners";
import { Team } from "../components/Team/Team";
import { ContactForm } from "../components/ContactForm/ContactForm";

export default function () {
  const [widthSvg, setWidthSvg] = useState(300);
  return (
    <>
      <FirstScreen setWidthSvg={setWidthSvg} />
      <MainScreenInfo widthSvg={widthSvg} />
      <ExploreBlock />
      <DefiBlock />
      <CoomingSoon />
      <Coins />
      <Roadmap />
      <Team />
      <Partners />
      <ContactForm />
    </>
  );
}
