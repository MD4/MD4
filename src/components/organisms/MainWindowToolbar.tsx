import DropdownMenu from "@components/molecules/DropdownMenu";
import {
  DescriptionProvider,
  DEFAULT_DESCRIPTION,
} from "@context/DescriptionProvider";
import { ThemeProvider } from "@context/ThemeProvider";
import Icon from "@components/atoms/Icon";
import React from "react";
import { Separator, Button } from "react95";
import DropdownMenuItemLink from "@components/molecules/DropdownMenuItemLink";
import DropdownMenuItem from "@components/molecules/DropdownMenuItem";

const MainWindowToolbar = () => {
  const [, setDescription] = DescriptionProvider.useDescription();

  const buttonMouseEnter = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const description = event.currentTarget.getAttribute("aria-description");
      setDescription(description ?? DEFAULT_DESCRIPTION);
    },
    [setDescription]
  );

  const buttonMouseLeave = React.useCallback(
    () => setDescription(DEFAULT_DESCRIPTION),
    [setDescription]
  );

  const [theme, setTheme] = ThemeProvider.useTheme();

  return (
    <>
      <DropdownMenu label="Links" description="Get all my links">
        <DropdownMenuItemLink href="https://github.com/MD4" primary>
          <Icon src="./icons/w95_61.ico" alt="program icon" />
          Github
        </DropdownMenuItemLink>
        <Separator />
        <DropdownMenuItemLink href="https://www.linkedin.com/in/martin-dequatremare-439923b1/">
          <Icon src="./icons/w95_19.ico" alt="program icon" />
          LinkedIn
        </DropdownMenuItemLink>
        <DropdownMenuItemLink href="https://x.com/MDequa">
          <Icon src="./icons/w95_69.ico" alt="program icon" />
          Twitter (formerly X)
        </DropdownMenuItemLink>
      </DropdownMenu>
      <DropdownMenu label="Contact" description="Contact me for any reason">
        <DropdownMenuItemLink
          href="mailto:contact@martin-dequatremare.fr"
          primary
        >
          <Icon src="./icons/w95_70.ico" alt="program icon" />
          Send me an email
        </DropdownMenuItemLink>
        <DropdownMenuItemLink href="https://www.linkedin.com/in/martin-dequatremare-439923b1/">
          <Icon src="./icons/w95_18.ico" alt="program icon" />
          Send me a message on LinkedIn
        </DropdownMenuItemLink>
      </DropdownMenu>

      <Button
        variant="menu"
        size="sm"
        aria-description="Hire me (currently unavailable)"
        onMouseEnter={buttonMouseEnter}
        onMouseLeave={buttonMouseLeave}
        disabled
      >
        Hire
      </Button>

      <div style={{ flex: 1 }} />

      <DropdownMenu label="Theme" description="Change theme" align="right">
        <DropdownMenuItem
          size="sm"
          primary={theme === "light"}
          onClick={() => setTheme("light")}
        >
          <Icon src="./icons/w95_28.ico" alt="program icon" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          size="sm"
          primary={theme === "dark"}
          onClick={() => setTheme("dark")}
        >
          <Icon src="./icons/w95_26.ico" alt="program icon" />
          Dark
        </DropdownMenuItem>
      </DropdownMenu>
    </>
  );
};

export default MainWindowToolbar;
