import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/core";

function About() {
    return (
    <Flex
        width="full"
        align="center"
        justifyContent="center"
        w="100%"
        h="auto"
        p={4}
        direction="column"
        gridArea="main"
        >
        <Box margin="0 auto" textAlign="center">
            <Heading color="orange.400">About</Heading>
            <Text
            color="orange"
            margin="0 auto"
            textAlign="center"
            w="40%"
            fontSize="4xl"
            >
            Recently studied Software Engineering at General Assembly. I have always loved 
            technology and think it can be used more in general education and for Greater 
            Education towards the public.
            </Text>
        </Box>
        </Flex>
    )
}

export default About;