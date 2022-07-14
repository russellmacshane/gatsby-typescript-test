import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-arrow {
    color: #0f1b45;
  }

  & .MuiTooltip-tooltip {
    background-color: #0f1b45;
    color: #ffffff;
    font-size: 14px;
    font-weight: normal;
    max-width: 220px;
  }
`;

type Props = {
  children: React.ReactNode;
  title: string;
};

const RussTooltip = ({ children, title }: Props) => {
  return (
    <>
      <StyledTooltip title={title} arrow placement="top" enterTouchDelay={0}>
        <span className="underline">{children}</span>
      </StyledTooltip>
    </>
  );
};

export default RussTooltip;
