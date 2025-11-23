import React from "react";
import { MenuListItem } from "react95";
import * as hatpics from "@utils/haptics";
const DropdownMenuItemLink = ({
  href,
  primary,
  children,
}: {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}) => {
  const onClick: React.MouseEventHandler<HTMLLIElement> =
    React.useCallback(() => {
      hatpics.light();
      return true;
    }, []);

  return (
    <MenuListItem
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.75rem",
      }}
      primary={primary}
      size="sm"
      as="a"
      /* @ts-expect-error - should be allowed in typing */
      href={href}
      target="_blank"
      onClick={onClick}
    >
      {children}
    </MenuListItem>
  );
};

export default DropdownMenuItemLink;
