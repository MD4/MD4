import styled from "styled-components";

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
`;

const Icon = ({ src, alt }: { src: string; alt: string }) => (
  <StyledImg src={src} alt={alt} />
);

export default Icon;
