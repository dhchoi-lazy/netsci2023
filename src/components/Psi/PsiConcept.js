import * as d3 from "d3";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ReactComponent as TCS } from "./tcs.svg";

export default function PsiConcept() {
  const ref = useRef();
  const tcs = ref.current;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(DrawSVGPlugin);

    // let ctx = gsap.context(() => {
    // use scoped selectors
    const tl = gsap.timeline();
    console.log("tl");
    tl.fromTo(
      "#base",
      { autoAlpha: 0 },
      { autoAlpha: 1, ease: "power1.inOut" }
    );
    tl.fromTo("#passingGwageo", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#cl1", { drawSVG: "0%" }, { duration: 1, drawSVG: "100%" });
    tl.fromTo("#firstAppearance", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#cl2", { drawSVG: "0%" }, { duration: 1, drawSVG: "100%" });
    tl.fromTo("#line1", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#cl3", { drawSVG: "0%" }, { duration: 1, drawSVG: "100%" });
    tl.fromTo("#line2", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#cl4", { drawSVG: "0%" }, { duration: 1, drawSVG: "100%" });
    tl.fromTo("#line3", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#cl5", { drawSVG: "0%" }, { duration: 1, drawSVG: "100%" });
    tl.fromTo("#lastAppearance", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#lastAppearance", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#area", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#totalSuccess", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");

    ScrollTrigger.create({
      trigger: "#tcs",
      start: "top center",
      end: "center center",
      scrub: true,
      animation: tl,
    });
    // or refs
  }, []);

  return (
    <div>
      <h1>Psi concept</h1>
      <TCS ref={tcs} id="tcs" />
    </div>
  );
}
