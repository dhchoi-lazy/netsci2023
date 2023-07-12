import LoremIpsum from "react-lorem-ipsum";
import { GridNormal, GridContainer } from "../Layout";

export default function Conclusion() {
  return (
    <section id="conclusion">
      <GridContainer>
        <GridNormal>
          <h1>5. Conclusion</h1>
          <LoremIpsum p={7}></LoremIpsum>
        </GridNormal>
      </GridContainer>
    </section>
  );
}
