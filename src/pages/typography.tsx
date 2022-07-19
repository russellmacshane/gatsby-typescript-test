import * as React from "react";
import Basic from "../themes/basic";
import { Container, Typography } from "@mui/material";

const TypographyPage = () => (
  <Basic>
    <Container>
      <Typography variant="h1" component="h1">h1. Header 1</Typography>
      <Typography variant="h2" component="h2">h2. Header 2</Typography>
      <Typography variant="h3" component="h3">h3. Header 3</Typography>
      <Typography variant="h4" component="h4">h4. Header 4</Typography>
      <Typography variant="h5" component="h5">h5. Header 5</Typography>
      <Typography variant="h6" component="h5">h6. Header 6</Typography>
      <Typography variant="subtitle1" component="p">p. paragraph (looks like subtitle1)</Typography>
      <Typography variant="body1" component="p">p. paragraph (looks like body1)</Typography>
    </Container>

    <Container>
      <Typography variant="body1" component="h1">h1. Header 1 (looks like body1)</Typography>
      <Typography variant="subtitle1" component="h2">h2. Header 2 (looks like subtitle1)</Typography>
      <Typography variant="h6" component="h3">h3. Header 3 (looks like h6)</Typography>
      <Typography variant="h5" component="h4">h4. Header 4 (looks like h5)</Typography>
      <Typography variant="h4" component="h5">h5. Header 5 (looks like h4)</Typography>
      <Typography variant="h3" component="h6">h6. Header 6 (looks like h3)</Typography>
      <Typography variant="h2" component="p">p. paragraph (looks like h2)</Typography>
      <Typography variant="h1" component="p">p. paragraph (looks like h1)</Typography>
    </Container>
  </Basic>
);

export default TypographyPage;
