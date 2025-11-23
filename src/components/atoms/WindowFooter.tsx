import { Frame as _Frame } from "react95";
import styled from "styled-components";

const StyledFrame = styled(_Frame)`
  display: block;
  margin: 0.25rem;
  height: 31px;
  line-height: 31px;
  padding-left: 0.25rem;
`;

const WindowFooter = ({ children }: { children?: React.ReactNode }) => (
  <StyledFrame variant="status">{children}</StyledFrame>
);

export default WindowFooter;
