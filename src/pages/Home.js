import React from "react";

import {
    Box,
    Heading,
    Text,
} from "@chakra-ui/core";

function Home() {
    return (
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        width="100%"
        height="100%"
        >
            <Heading MarginTop="10%" color="orange.400">
                Jolean Lima
            </Heading>
            <Text color="orange.400" fontSize="20pt">
                Welcome! I recently completed a full stack software engineering bootcamp at General Assembly.
                
                and am seeking full time jobs as a full stack engineer, to help increase my knowledge!
            </Text>
        </Box>
    );
}

export default Home;