import { theme } from "@chakra-ui/core";

export default {
  ...theme,
  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.blue,
      500: "mediumseagreen"
    }
  }
};