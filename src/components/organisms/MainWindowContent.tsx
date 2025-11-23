import Avatar from "@components/atoms/Avatar";
import { GroupBox } from "react95";
import styled from "styled-components";

const DescriptionBox = styled(GroupBox)`
  display: flex;
  flex-direction: column;
  gap: 0.66rem;

  strong {
    font-weight: bold;
  }
`;

const MainWindowContent = () => (
  <>
    <Avatar />
    <DescriptionBox label={<strong>Hi there, I'm Martin!</strong>}>
      <span>
        I'm a lead frontend engineer based around Nantes, FR.
        <br />I love building new stuff with great UX/UI in an elegant and
        maintainable way.
      </span>
      <span>
        Please feel free to check my work and contact me for any project!
      </span>
    </DescriptionBox>
  </>
);

export default MainWindowContent;
