import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box w="100vw" bg="#FBF0DA">
      <Text align="center" fontWeight="500">
        {greeting}
      </Text>
    </Box>
  );
};

export default ItemListContainer;
