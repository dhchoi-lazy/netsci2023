import gsap from "gsap";
import { useRef, useLayoutEffect, useEffect } from "react";
import Cartogram15 from "./15a.svg";
import Choropleth15 from "./15b.svg";
import Cartogram16 from "./16a.svg";
import Choropleth16 from "./16b.svg";
import Cartogram17 from "./17a.svg";
import Choropleth17 from "./17b.svg";
import Cartogram18 from "./18a.svg";
import Choropleth18 from "./18b.svg";
import Cartogram19 from "./19a.svg";
import Choropleth19 from "./19b.svg";
import { LoremIpsum } from "react-lorem-ipsum";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import styled from "styled-components";
import "./Cartogram.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const CartogramWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const SvgImg = styled.img`
  // width: 500px;
  // height: 500px;
`;
export default function Cartogram() {
  const cartogramRef = useRef();
  const wrapperRef = useRef();
  useEffect(() => {
    ScrollTrigger.defaults({
      markers: false,
    });

    var points = gsap.utils.toArray(".point");
    var indicators = gsap.utils.toArray(".indicator");

    var height = 100 * points.length;

    gsap.set(".indicators", { display: "flex" });

    var tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: ".philosophie",
        start: "top center",
        end: "+=" + height + "%",
        scrub: true,
        id: "points",
      },
    });

    var pinner = gsap.timeline({
      scrollTrigger: {
        trigger: ".philosophie .wrapper",
        start: "top top",
        end: "+=" + height + "%",
        scrub: true,
        pin: ".philosophie .wrapper",
        pinSpacing: true,
        id: "pinning",
        markers: true,
      },
    });

    points.forEach(function (elem, i) {
      gsap.set(elem, { position: "absolute", top: 0 });

      tl.to(indicators[i], { backgroundColor: "orange", duration: 0.25 }, i);
      tl.from(elem.querySelectorAll("img"), { autoAlpha: 0 }, i);
      tl.from(
        elem.querySelector("article"),
        { autoAlpha: 0, translateY: 100 },
        i
      );

      tl.addLabel("position-" + i); // Adding a label here, with the index as unique identifier

      if (i != points.length - 1) {
        tl.to(
          indicators[i],
          { backgroundColor: "#adadad", duration: 0.25 },
          i + 0.75
        );
        tl.to(
          elem.querySelector("article"),
          { autoAlpha: 0, translateY: -100 },
          i + 0.75
        );
        tl.to(elem.querySelectorAll("img"), { autoAlpha: 0 }, i + 0.75);
      }
    });

    // Looping over all the indicators...
    indicators.forEach(function (indicator, i) {
      // ...forEach of them adding a click-event listener...
      indicator.addEventListener("click", function () {
        // ...leveraging the ScrollToPlugin and ...
        // ...ScrollTrigger's  labelToScroll() method
        gsap.to(window, {
          duration: 1,
          scrollTo: tl.scrollTrigger.labelToScroll(`position-${i}`),
        });
      });
    });
  }, []);

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <>
      <section className="vh"></section>

      <section ref={cartogramRef} className="philosophie">
        <div className="wrapper">
          <div className="indicators">
            <div className="indicator">15th</div>
            <div className="indicator">16th</div>
            <div className="indicator">17th</div>
            <div className="indicator">18th</div>
            <div className="indicator">19th</div>
          </div>
          <div className="point">
            <article>
              <h3>Title 1</h3>
              <p>ss</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </article>
            <div className="maps">
              <img src={Cartogram15} alt="cartogram" width={450} />
              <img src={Choropleth15} alt="cartogram" width={450} />
            </div>
          </div>
          <div className="point">
            <article>
              <h3>Title 2</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </article>
            <div className="maps">
              <img src={Cartogram16} alt="cartogram" width={450} />
              <img src={Choropleth16} alt="cartogram" width={450} />
            </div>
          </div>
          <div className="point">
            <article>
              <h3>Title 3</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </article>
            <div className="maps">
              <img src={Cartogram17} alt="cartogram" width={450} />
              <img src={Choropleth17} alt="cartogram" width={450} />
            </div>
          </div>
          <div className="point">
            <article>
              <h3>Title 4</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </article>
            <div className="maps">
              <img src={Cartogram18} alt="cartogram" width={450} />
              <img src={Choropleth18} alt="cartogram" width={450} />
            </div>
          </div>
          <div className="point">
            <article>
              <h3>Title 5</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </article>
            <div className="maps">
              <img src={Cartogram19} alt="cartogram" width={450} />
              <img src={Choropleth19} alt="cartogram" width={450} />
            </div>
          </div>
        </div>
      </section>

      <section className="vh"></section>
    </>
  );
}
