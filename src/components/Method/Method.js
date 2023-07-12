import LoremIpsum from "react-lorem-ipsum";
import Gyeyu from "./Gyeyu";
import Cartogram from "./Cartogram";
import Age from "./Age";
import { GridNormal, GridHighlight, GridContainer } from "../Layout";
export default function Method() {
  return (
    <section id="method">
      <GridContainer>
        <GridNormal>
          <h1>3. Method</h1>
          <LoremIpsum p={2}></LoremIpsum>
        </GridNormal>
        <GridHighlight>
          <Gyeyu />
        </GridHighlight>
        <GridHighlight>
          <Cartogram />
        </GridHighlight>
        <GridNormal>
          <Age />
        </GridNormal>
      </GridContainer>
    </section>
  );
}
