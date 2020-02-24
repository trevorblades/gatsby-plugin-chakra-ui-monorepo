import React from "react";
import { Button, Text, useTheme } from "@chakra-ui/core";
import { Fragment } from "react";

export default function Index() {
  const theme = useTheme();
  return (
    <Fragment>
      <Button variantColor="blue">Hello</Button>
      <Text color="blue.500">{theme.colors.blue[500]}</Text>
    </Fragment>
  );
}