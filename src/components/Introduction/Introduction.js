import { useRef, useLayoutEffect } from "react";
import { GridNormal, GridHighlight, GridContainer } from "../Layout";
import LoremIpsum from "react-lorem-ipsum";
import Bureaucracy from "./Bureaucracy";
import Gwageo from "./Gwageo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Joseon from "./Joseon";
gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const introductionRef = useRef(null);
  const numberRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".statistics", {
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top center", // 요소의 상단이 뷰포트의 중앙에 도달하면 시작
          end: "+=50", // 요소의 하단이 뷰포트의 중앙에서 500px 떨어진 곳에 도달하면 끝
          scrub: true,
          markers: true,
          id: "numbers",
        },
        innerText: 0,
        snap: {
          innerText: 1,
        },
        ease: "power1.inOut",
      });
    }, introductionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="introduction" ref={introductionRef}>
      <GridContainer>
        <GridNormal>
          <h1>1. Introduction</h1>
          <LoremIpsum p={5}></LoremIpsum>
          <h1 id="trigger">trigger</h1>
          <div
            ref={numberRef}
            className="sillokStatistics"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <p className="statistics">300</p>
            <p className="statistics">500</p>
            <p className="statistics">600</p>
          </div>
        </GridNormal>
        <GridHighlight>
          <Joseon />
        </GridHighlight>
        <GridNormal>
          <h2>Bureaucracy</h2>
          <Bureaucracy />
        </GridNormal>
        <GridHighlight>
          <Gwageo />
        </GridHighlight>
        <GridNormal>
          <h1>RQ1</h1>
          <h1>RQ2</h1>
          <h1>RQ3</h1>
        </GridNormal>
      </GridContainer>
    </section>
  );
}
