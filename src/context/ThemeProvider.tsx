import React, { createContext, type ReactNode, useContext } from "react";
import light from "react95/dist/themes/original";
import dark from "react95/dist/themes/tokyoDark";
import { ThemeProvider as _ThemeProvider } from "styled-components";

export type ThemeType = "light" | "dark";

const ThemeContext = createContext<
  [ThemeType, React.Dispatch<React.SetStateAction<ThemeType>>]
>(["light", () => {}]);

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: {
  children: ReactNode;
  defaultTheme?: ThemeType;
}) {
  const themeState = React.useState<ThemeType>(defaultTheme);
  const [theme] = themeState;

  return (
    <_ThemeProvider theme={theme === "light" ? light : dark}>
      <ThemeContext.Provider value={themeState}>
        {children}
      </ThemeContext.Provider>
    </_ThemeProvider>
  );
}

ThemeProvider.useTheme = () => useContext(ThemeContext);
