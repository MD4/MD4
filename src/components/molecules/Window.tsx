import { Toolbar, Window as _Window } from "react95";
import React from "react";
import styled from "styled-components";
import WindowHeader from "./WindowHeader";
import WindowFooter from "@components/atoms/WindowFooter";
import WindowContent from "@components/atoms/WindowContent";

const StyledWindow = styled(_Window)`
  position: absolute;
  width: min(600px, calc(100vw) - 2rem);
  box-shadow: inset 1px 1px 0px 1px
      ${
        // @ts-expect-error - theme typing issue
        ({ theme }) => theme.borderLight
      },
    inset -1px -1px 0 1px
      ${
        // @ts-expect-error - theme typing issue
        ({ theme }) => theme.borderDark
      };
`;

const Window = ({
  title,
  children,
  toolbarContent,
  footerContent,
}: {
  title: string;
  children?: React.ReactNode;
  toolbarContent?: React.ReactNode;
  footerContent?: React.ReactNode;
}) => (
  <StyledWindow>
    <WindowHeader title={title} />
    {toolbarContent && <Toolbar>{toolbarContent}</Toolbar>}
    {children && <WindowContent>{children}</WindowContent>}
    {footerContent && <WindowFooter>{footerContent}</WindowFooter>}
  </StyledWindow>
);

export default Window;
