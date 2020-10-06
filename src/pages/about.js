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
            fontSize="20pt"
            >
            I am a 22 year old Capeverdean who before becoming a software engineer was studying child psychology.
            I changed paths to software engineer because although I still love psychology I want to be able to help the youth and teach,
            and I think that software programming in the time of pandemic will be the way towards education. 
            </Text>
        </Box>
        </Flex>
    )
}

export default About;