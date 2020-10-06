import React from "react";

import { Box, Stack, Button, Flex } from "@chakra-ui/core";

function Footer() {
return(
<Box
    backgroundColor="blue.400"
    gridArea="footer"
    position="absolute"
    bottom="0"

    >
    <Stack spacing={[8, 12]} mx="auto" maxW="720px" align="center">
    <Button leftIcon="at-sign" variantColor="orange" variant="solid" >
    joleanflima@outlook.com
  </Button>
    
  </Stack>
    </Box>
  )
}

export default Footer;


