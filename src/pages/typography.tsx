import * as React from "react";
import Basic from "../themes/basic";
import { Container, Typography } from "@mui/material";

const TypographyPage = () => (
  <Basic>
    <Container>
      <Typography variant="h1">h1. Header 1</Typography>
      <Typography variant="h2">h2. Header 2</Typography>
      <Typography variant="h3">h3. Header 3</Typography>
      <Typography variant="h4">h4. Header 4</Typography>
      <Typography variant="h5">h5. Header 5</Typography>
      <Typography variant="h6">h6. Header 6</Typography>
      <Typography variant="subtitle1">subtitle1. Subtitle 1</Typography>
      <Typography variant="body1">body1. Body 1</Typography>
    </Container>
  </Basic>
);

export default TypographyPage;
