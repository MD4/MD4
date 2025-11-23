import { MenuListItem } from "react95";
import styled from "styled-components";
import * as haptics from "@utils/haptics";

const _DropdownMenuItem = styled(MenuListItem)`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  gap: 0.75rem;
`;

const DropdownMenuItem = ({
  children,
  onClick,
  ...props
}: React.ComponentProps<typeof MenuListItem>) => {
  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    haptics.light();
    return onClick?.(event);
  };
  return (
    <_DropdownMenuItem {...props} onClick={handleClick}>
      {children}
    </_DropdownMenuItem>
  );
};

export default DropdownMenuItem;
