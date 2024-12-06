import React from "react";
import { Box } from "@chakra-ui/react";

export function Separator({ width = "100%", ...props }) {
  return (
    <Box
      as="hr"
      borderTopWidth="1px"
      borderColor="gray.600"
      width={width}
      my={4}
      {...props}
    />
  );
}
