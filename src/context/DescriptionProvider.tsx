import React, { createContext, type ReactNode, useContext } from "react";

export const DEFAULT_DESCRIPTION = `c ${new Date().getFullYear()} MD4 - Built with React95`;

const DescriptionContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>([DEFAULT_DESCRIPTION, () => {}]);

export function DescriptionProvider({ children }: { children: ReactNode }) {
  const description = React.useState<string>(DEFAULT_DESCRIPTION);

  return (
    <DescriptionContext.Provider value={description}>
      {children}
    </DescriptionContext.Provider>
  );
}

DescriptionProvider.useDescription = () => useContext(DescriptionContext);
