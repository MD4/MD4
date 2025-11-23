import { WindowHeader as _WindowHeader } from "react95";
import styled from "styled-components";
import ButtonClose from "@components/atoms/ButtonClose";
import Icon from "@components/atoms/Icon";

const StyledWindowHeader = styled(_WindowHeader)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const TitleText = styled.span`
  flex: 1;
`;

const WindowHeader = ({ title }: { title: string }) => (
  <StyledWindowHeader className="window-title">
    <Icon src="/icon-program.png" alt="program icon" />
    <TitleText>{title}</TitleText>
    <ButtonClose />
  </StyledWindowHeader>
);

export default WindowHeader;
