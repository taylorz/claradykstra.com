import { useMediaQuery } from "react-responsive";
import { theme } from "../styles/theme";

export const useScreenSize = () => {
  const isXs = useMediaQuery({ maxWidth: theme.breakpoint.xs });
  const isSm = useMediaQuery({ maxWidth: theme.breakpoint.sm });
  const isMd = useMediaQuery({ maxWidth: theme.breakpoint.md });
  const isLg = useMediaQuery({ maxWidth: theme.breakpoint.lg });

  return {
    screenSize: {
      isXs,
      isSm,
      isMd,
      isLg,
    },
  };
};
