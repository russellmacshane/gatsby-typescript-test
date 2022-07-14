import * as React from "react";
import { styled } from "@mui/material/styles";
import Test from "../components/basic/test";
import RussButton from "../components/basic/russ-button";
import RussTooltip from "../components/basic/russ-tooltip";

const StyledDiv = styled("div")`
  margin-top: 20px;
`;

const RussTest = () => (
  <main>
    <h1>Russ Test</h1>
    <p>This page is a simple test!</p>
    <Test input="RUSSELL" />
    <StyledDiv>
      <RussButton text="Russ Button" />
    </StyledDiv>
    <StyledDiv>
      <RussTooltip title="Russ Tooltip Test">Tooltip Test Text</RussTooltip>
    </StyledDiv>
  </main>
);

export default RussTest;
