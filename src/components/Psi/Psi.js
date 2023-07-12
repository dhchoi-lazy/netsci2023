import LoremIpsum from "react-lorem-ipsum";
import PsiConcept from "./PsiConcept";
import { GridNormal, GridHighlight, GridContainer } from "../Layout";
import Grid from "@mui/material/Grid";
import Psigraph from "./Psigraph";
import PsiGini from "./PsiGini";
import PsiSedogaGwageo from "./PsiSedogaGwageo";
import PsiSedogaPsi from "./PsiSedogaPsi";
import PsiHeatmap from "./PsiHeatmap";
export default function Psi() {
  return (
    <section id="psi">
      <GridContainer>
        <GridNormal>
          <h1>4. PSI</h1>
          <LoremIpsum p={2}></LoremIpsum>
          <PsiConcept />
        </GridNormal>
        <GridNormal>
          <Psigraph />
        </GridNormal>
        <GridNormal>
          <PsiGini />
        </GridNormal>
        <GridNormal>
          <PsiSedogaGwageo />
        </GridNormal>
        <GridNormal>
          <PsiSedogaPsi />
        </GridNormal>
        <GridNormal>
          <PsiHeatmap />
        </GridNormal>
      </GridContainer>
    </section>
  );
}
