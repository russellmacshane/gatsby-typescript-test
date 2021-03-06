import * as React from "react";
import Test from "../components/basic/test";
import RussButton from "../components/basic/russ-button";
import RussTooltip from "../components/basic/russ-tooltip";
import Icon from "../images/icon.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Basic from "../themes/basic";

const StyledParagraph = styled("div")`
  font-weight: bold;
  font-size: larger;
  border: 1px solid DARKSLATEBLUE;
`;

const RussTest = () => (
  <Basic>
    <Container>
      <Typography variant="h2" component="h2">
        Russ Test
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} alignItems="stretch">
        <Stack spacing={3} alignItems="flex-start" sx={{ width: ["100%", "50%"] }}>
          <StyledParagraph>This page is a simple test! (using Styled Components)</StyledParagraph>
          <Box sx={{ fontWeight: "bold", fontSize: "larger", border: "1px solid DARKSLATEBLUE" }}>
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
        <Stack
          sx={{
            backgroundColor: "DARKSLATEBLUE",
            width: "50%",
            borderRadius: "25px",
            boxShadow: 3,
          }}
          alignItems="stretch"
        />
      </Stack>
    </Container>
  </Basic>
);

export default RussTest;
