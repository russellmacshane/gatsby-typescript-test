import * as React from "react";
import Test from "../components/basic/test";
import RussButton from "../components/basic/russ-button";
import RussTooltip from "../components/basic/russ-tooltip";
import Icon from "../images/icon.png";
import { Box, Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledParagraph = styled("div")`
  font-weight: bold;
  font-size: larger;
  border: 1px solid red;
`;

const RussTest = () => (
  <Container>
    <h1>Russ Test</h1>

    <Stack spacing={3} alignItems="flex-start">
      <StyledParagraph>This page is a simple test! (using Styled Components)</StyledParagraph>
      <Box sx={{ fontWeight: "bold", fontSize: "larger", border: "1px solid red" }}>
        This page is a simple test! (Using Box and sx)
      </Box>

      <Stack spacing={2} alignItems="flex-start">
        <Test input="RUSSELL" />
        <RussButton text="Russ Button" />
        <RussTooltip title="Russ Tooltip Test">Tooltip Test Children!!</RussTooltip>
      </Stack>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <img src={Icon} alt="" width={50} />
        <img src={Icon} alt="" width={50} />
        <img src={Icon} alt="" width={50} />
      </Stack>
    </Stack>
  </Container>
);

export default RussTest;
