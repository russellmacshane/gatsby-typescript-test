import * as React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)`
  background-color: aqua;
  color: green;

  :hover {
    background-color: white;
    color: black;
  }
`;

const RussButton = ({ text }: { text: string }) => (
  <CustomButton variant="contained" color="primary">
    {text}
  </CustomButton>
);

export default RussButton;
