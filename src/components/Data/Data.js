import LoremIpsum from "react-lorem-ipsum";
import Bangmok from "./Bangmok";
import Sillok from "./Sillok";
import { GridNormal, GridHighlight, GridContainer } from "../Layout";

export default function Data() {
  return (
    <section id="data">
      <GridContainer>
        <GridNormal>
          <h1>2. Data</h1>
          <LoremIpsum p={1}></LoremIpsum>
        </GridNormal>
        <GridHighlight>
          <Sillok />
        </GridHighlight>
        <GridHighlight>
          <Bangmok />
        </GridHighlight>
      </GridContainer>
    </section>
  );
}
