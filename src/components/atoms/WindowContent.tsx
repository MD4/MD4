import { WindowContent as _WindowContent } from "react95";
import styled from "styled-components";

const StyledWindowContent = styled(_WindowContent)`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const WindowContent = ({ children }: { children?: React.ReactNode }) => (
  <StyledWindowContent>{children}</StyledWindowContent>
);

export default WindowContent;
