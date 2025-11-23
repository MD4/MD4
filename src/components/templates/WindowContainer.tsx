import styled from "styled-components";

const _WindowContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

const WindowContainer = styled(_WindowContainer)`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default WindowContainer;
