import { Button, MenuList } from "react95";
import React from "react";
import {
  DEFAULT_DESCRIPTION,
  DescriptionProvider,
} from "@context/DescriptionProvider";
import styled from "styled-components";
import { useOnClickOutside } from "usehooks-ts";
import * as haptics from "@utils/haptics";

const StyledButton = styled(Button)`
  position: relative;
`;

const StyledMenuList = styled(MenuList)`
  position: absolute;
  margin-top: 0.25rem;
  top: 100%;
  left: -0.1rem;
  z-index: 2;

  animation: dropdownMenuAppear 50ms ease-in-out;
  transform-origin: top center;

  &.align-right {
    left: auto;
    right: -0.1rem;
  }

  @keyframes dropdownMenuAppear {
    from {
      transform: scaleY(0.8);
    }
    to {
      transform: scaleY(1);
    }
  }
`;

const DropdownMenu = ({
  label,
  description,
  align,
  children,
}: {
  label: string;
  description?: string;
  align?: "left" | "right";
  children: React.ReactNode;
}) => {
  const [, setDescription] = DescriptionProvider.useDescription();
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleButtonMouseEnter = React.useCallback(
    () => setDescription(description ?? DEFAULT_DESCRIPTION),
    [description, setDescription]
  );

  const handleButtonMouseLeave = React.useCallback(
    () => setDescription(DEFAULT_DESCRIPTION),
    [setDescription]
  );

  const handleButtonClick = () => {
    haptics.light();
    setIsOpen((open) => !open);
  };

  const handleClickOutside = () => setIsOpen(false);

  useOnClickOutside(
    ref as React.RefObject<HTMLButtonElement>, // @TODO: fix it when broken types in usehooks-ts will be fixed
    handleClickOutside
  );

  return (
    <StyledButton
      ref={ref}
      active={isOpen}
      variant="menu"
      size="sm"
      aria-description="Get all my links"
      onMouseEnter={handleButtonMouseEnter}
      onMouseLeave={handleButtonMouseLeave}
      onClick={handleButtonClick}
    >
      <span>{label}</span>
      {isOpen && (
        <StyledMenuList className={align === "right" ? "align-right" : ""}>
          {children}
        </StyledMenuList>
      )}
    </StyledButton>
  );
};

export default DropdownMenu;
