import { Button } from "react95";
import React from "react";
import {
  DEFAULT_DESCRIPTION,
  DescriptionProvider,
} from "@context/DescriptionProvider";
import styled from "styled-components";
import * as haptics from "@utils/haptics";

const StyledButton = styled(Button)`
  font-weight: bold;
`;

const ButtonClose = () => {
  const [, setDescription] = DescriptionProvider.useDescription();

  const handleMouseEnter = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const description = event.currentTarget.getAttribute("aria-description");
      setDescription(description ?? DEFAULT_DESCRIPTION);
    },
    [setDescription]
  );

  const handleMouseLeave = React.useCallback(
    () => setDescription(DEFAULT_DESCRIPTION),
    [setDescription]
  );

  const handleClick = () => {
    haptics.heavy();
    window.close();
  };

  return (
    <StyledButton
      aria-label="Close"
      aria-description="Bye, have a nice day!"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      X
    </StyledButton>
  );
};

export default ButtonClose;
