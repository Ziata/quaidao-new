import React from "react";
import { ProjectsBlock } from "../components/Projects/ProjectsBlock/ProjectsBlock";
import { ProjectsHeader } from "../components/Projects/ProjectsHeader/ProjectsHeader";

const projects = [
  {
    title: "rASKO",
    img: "img/projects/rasko.png",
    text: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          dapibus arcu. Donec ornare convallis aliquam. Fusce dictum, dolor sit
          amet sodales convallis, massa felis mollis augue, at aliquet arcu
          nulla bibendum mauris.
        </p>
        <p>
          Phasellus sagittis, leo efficitur gravida ullamcorper, nisi nisl
          tincidunt dui, vitae volutpat metus turpis eget ex.
        </p>
      </>
    ),
    link: "",
  },
  {
    title: "QUAI Invest",
    img: "img/projects/quai.png",
    text: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          dapibus arcu. Donec ornare convallis aliquam. Fusce dictum, dolor sit
          amet sodales convallis, massa felis mollis augue, at aliquet arcu
          nulla bibendum mauris.
        </p>
        <p>
          Phasellus sagittis, leo efficitur gravida ullamcorper, nisi nisl
          tincidunt dui, vitae volutpat metus turpis eget ex.
        </p>
      </>
    ),
    link: "",
  },
  {
    title: "MeDIA eYe NFT Portal",
    img: "img/projects/eye.png",
    text: (
      <>
        <p>
          MeDIA eYe NFT Portal is an innovative and unique platform, one that
          will revolutionize the NFT creator market. A frictionless platform for
          creating, trading, and distributing NFTs.
        </p>
        <p>
          The NFT Creator Portal is designed to support marketers, artists,
          businesses, and other organizations wanting to merchandise, promote,
          and advertise their products.
        </p>
      </>
    ),
    link: "",
  },
  {
    title: "Metaverse Comics",
    img: "img/projects/comics.png",
    text: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          dapibus arcu. Donec ornare convallis aliquam. Fusce dictum, dolor sit
          amet sodales convallis, massa felis mollis augue, at aliquet arcu
          nulla bibendum mauris.
        </p>
        <p>
          Phasellus sagittis, leo efficitur gravida ullamcorper, nisi nisl
          tincidunt dui, vitae volutpat metus turpis eget ex.
        </p>
      </>
    ),
    link: "",
  },
];

export default function () {
  return (
    <>
      <ProjectsHeader />
      {projects.map((project, i) => (
        <ProjectsBlock project={project} index={i} key={i} />
      ))}
    </>
  );
}
